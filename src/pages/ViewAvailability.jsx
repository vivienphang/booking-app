import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Grid,
  Divider,
  Modal,
  Typography,
  Stack,
  Icon,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import BookingForm from "../components/BookingForm";
import styles from "./calendar.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getRoomNames,
  getAllBookings,
  updateBookingId,
  deleteBookingId,
} from "../auth/firebase";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const ViewAvailability = () => {
  const [selectedRoomData, setSelectedRoomData] = useState({
    name: "",
    size: "",
    equipment: [],
  });
  const [bookingForm, setBookingForm] = useState({
    roomName: "",
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    username: "",
  });
  const [events, setEvents] = useState([]);
  const [bookingDataArray, setBookingDataArray] = useState([]); // State for booking data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [roomNames, setRoomNames] = useState([]);
  const [editedData, setEditedData] = useState({
    id: "",
    title: "",
    date: "",
    roomName: "",
    startTime: "",
    endTime: "",
  });

  let { id } = useParams();

  const handleDateClick = (arg) => {
    console.log(arg.dateStr);
  };

  const handleEventClick = (info) => {
    const clickedEvent = info.event;
    setSelectedEvent(clickedEvent);
    setIsModalOpen(true);
  };

  const handleEventClose = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
  };

  const handleEditButton = () => {
    setIsEditMode(true);
    console.log("Selected event: ", selectedEvent);
    setEditedData({
      id: selectedEvent.id,
      title: selectedEvent.title,
      roomName: selectedEvent.extendedProps.name,
      date: selectedEvent.start.toISOString().substring(0, 10),
    });
    console.log("Edited data - ", editedData);
  };

  const handleSaveButton = async () => {
    try {
      await updateBookingId(editedData.id, editedData);
      // After successful update, close the modal and reset the editedData
      setIsModalOpen(false);
      setIsEditMode(false);
      console.log("Saving edited data...");
      setEditedData({
        id: "",
        title: "",
        roomName: "",
        date: "",
        start: "",
        end: "",
      });
    } catch (error) {
      console.error("Error saving edited data:", error);
    }
  };

  const handleDeleteBookingId = async () => {
    if (selectedEvent) {
      try {
        await deleteBookingId(selectedEvent.id);

        // Update bookingDataArray by removing the deleted booking
        setBookingDataArray((prevData) =>
          prevData.filter((booking) => booking.id !== selectedEvent.id)
        );
        console.log("Booking data array -", bookingDataArray);

        // Close the modal
        setIsAlertDialogOpen(false);
        setIsModalOpen(false);
      } catch (err) {
        console.log("Error deleting booking: ", err);
      }
    }
  };

  const handleDeleteButton = () => {
    setIsAlertDialogOpen(true);
    console.log("Delete alert incoming!");
    console.log(isAlertDialogOpen);
  };
  const handleDialogClose = () => {
    setIsAlertDialogOpen(false);
  };

  useEffect(() => {
    const fetchBookings = async () => {
      const data = await getAllBookings();
      setBookingDataArray(data);
    };
    fetchBookings();
    const fetchNames = async () => {
      const data = await getRoomNames();
      setRoomNames(data);
    };
    fetchNames();
    console.log("Booking data array: ", bookingDataArray);
  }, [events, editedData]);

  const formattedEvents = async () => {
    const formattedData = await Promise.all(
      bookingDataArray.map((bookingData) => ({
        id: bookingData.id,
        title: bookingData.title,
        name: bookingData.roomName,
        date: new Date(bookingData.date).toLocaleDateString(),
        start: new Date(`${bookingData.date}T${bookingData.startTime}:00`),
        end: new Date(`${bookingData.date}T${bookingData.endTime}:00`),
        color: "black", // border color
        backgroundColor: "rgb(200,80,65)",
      }))
    );
    if (isEditMode) {
      const editedStart = new Date(
        `${editedData.date}T${editedData.startTime}:00`
      );
      const editedEnd = new Date(`${editedData.date}T${editedData.endTime}:00`);
      formattedData.push({
        title: editedData.title,
        name: editedData.roomName,
        date: new Date(editedData.date).toLocaleDateString(),
        start: editedStart,
        end: editedEnd,
      });
    }
    return formattedData;
  };

  return (
    <Grid container spacing={1} p={3} mt={11}>
      <Grid item xs={8} className={styles.CalendarView}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          views={{
            dayGridMonth: { buttonText: "Month" },
            dayGridWeek: { buttonText: "Week" },
            timeGridDay: { buttonText: "Day" },
            timeGridWeek: { buttonText: "Week" }, // Add week view button
          }}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "timeGridWeek,timeGridDay,dayGridMonth", // user can switch between the two
          }}
          dateClick={handleDateClick}
          events={formattedEvents}
          displayEventTime={true}
          height={"100vh"}
          eventClick={handleEventClick}
        />
        <Modal
          open={isModalOpen}
          onClose={handleEventClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className={styles.ModalContentContainer}>
            <div className={styles.ModalContentDiv}>
              <Typography
                id="modal-title"
                display="flex"
                justifyContent="space-between"
              >
                <span className={styles.ModalHeader}>
                  {isEditMode ? "Edit Details" : "Details"}
                </span>
                <IconButton onClick={handleDeleteButton}>
                  <DeleteOutlineOutlinedIcon
                    sx={{ fontSize: 35, color: "brown" }}
                  />
                </IconButton>
              </Typography>
              {isAlertDialogOpen && (
                <Dialog
                  open={isAlertDialogOpen}
                  onClose={handleDialogClose}
                  PaperProps={{
                    style: {
                      borderRadius: "20px",
                      backgroundColor: "antiquewhite",
                      maxWidth: "50%",
                      border: "1px solid black",
                    },
                  }}
                >
                  <DialogTitle className={styles.DialogTitle}>
                    <Icon sx={{ mr: 1, color: "red" }}>
                      <WarningRoundedIcon />
                    </Icon>
                    Delete event?
                  </DialogTitle>
                  <DialogContent id="alert-dialog-description">
                    <DialogContentText className={styles.DialogText}>
                      Are you sure you want to delete the event{" "}
                      <span style={{ fontWeight: "bold" }}>
                        {selectedEvent.title}
                      </span>
                      ? You can't undo this action.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions display="flex" justifyContent="center">
                    <IconButton
                      onClick={handleDeleteBookingId}
                      className={styles.DialogBtnDelete}
                    >
                      <CheckCircleOutlineOutlinedIcon />
                    </IconButton>
                    <IconButton
                      onClick={handleDialogClose}
                      className={styles.DialogBtnClose}
                    >
                      <CancelOutlinedIcon />
                    </IconButton>
                  </DialogActions>
                </Dialog>
              )}
              {selectedEvent && (
                <Stack>
                  {isEditMode ? (
                    <div display="flex">
                      <div className={styles.EditCard}>
                        <Typography>
                          <span className={styles.ModalKey}>Title: </span>
                        </Typography>
                        <TextField
                          className={styles.HoverFocus}
                          sx={{
                            backgroundColor: "rgb(255, 228, 196, 0.8)",
                            borderRadius: "25px",
                            marginLeft: "15px",
                          }}
                          type="text"
                          value={editedData.title}
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              title: e.target.value,
                            })
                          }
                          inputProps={{
                            style: {
                              height: "10px",
                              width: "290px",
                            },
                          }}
                        />
                      </div>
                      <div className={styles.EditCard}>
                        <InputLabel
                          sx={{
                            color: "bisque",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "20px",
                            fontWeight: 500,
                            paddingRight: "0.5rem",
                          }}
                        >
                          Room:
                        </InputLabel>
                        <Select
                          className={styles.HoverFocus}
                          sx={{
                            backgroundColor: "rgb(255, 228, 196, 0.8)",
                            borderRadius: "25px",
                            width: "320px",
                            height: "43px",
                            marginTop: "1.5px",
                          }}
                          value={editedData.roomName}
                          label="Room"
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              roomName: e.target.value,
                            })
                          }
                        >
                          {roomNames.map((room, index) => (
                            <MenuItem key={index} value={room}>
                              {room}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>
                      <div className={styles.EditCard}>
                        <Typography>
                          <span className={styles.ModalKey}>Date:</span>
                        </Typography>
                        <TextField
                          className={styles.HoverFocus}
                          sx={{
                            backgroundColor: "rgb(255, 228, 196, 0.8)",
                            borderRadius: "25px",
                            marginLeft: "8px",
                            marginTop: "2px",
                          }}
                          type="date"
                          value={editedData.date}
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              date: e.target.value,
                            })
                          }
                          inputProps={{
                            style: {
                              height: "10px",
                              width: "290px",
                            },
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div display="flex">
                        <Typography id="modal-description">
                          <span className={styles.ModalKey}>Title: </span>
                          <span className={styles.ModalValue}>
                            {selectedEvent.title}
                          </span>
                        </Typography>
                      </div>
                      <div display="flex">
                        <Typography id="modal-description">
                          <Icon>
                            <RoomOutlinedIcon />
                          </Icon>
                          <span className={styles.ModalValue}>
                            {selectedEvent.extendedProps.name}
                          </span>
                        </Typography>
                      </div>
                      <div display="flex">
                        <Typography id="modal-description">
                          <Icon>
                            <CalendarMonthIcon />
                          </Icon>
                          <span className={styles.ModalValue}>
                            {selectedEvent.start.toLocaleDateString("en-US", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </Typography>
                      </div>
                      <div display="flex">
                        <Typography id="modal-description">
                          <Icon>
                            <AccessTimeOutlinedIcon />
                          </Icon>
                          <span className={styles.ModalValue}>
                            {`${selectedEvent.start.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })} - ${selectedEvent.end.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}`}
                          </span>
                        </Typography>
                      </div>
                      <Divider sx={{ backgroundColor: "grey", mt: 4 }} />
                    </>
                  )}
                </Stack>
              )}

              {isEditMode ? (
                <>
                  <Divider sx={{ backgroundColor: "grey", mt: 4 }} />
                  <Typography display="flex" justifyContent="center" margin={2}>
                    <IconButton onClick={handleSaveButton}>
                      <SaveAltOutlinedIcon
                        sx={{ fontSize: 30, color: "rgb(72,171,83)" }}
                      />
                    </IconButton>{" "}
                    <IconButton onClick={handleEventClose}>
                      <CancelOutlinedIcon
                        sx={{ fontSize: 30, color: "antiquewhite" }}
                      />
                    </IconButton>{" "}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography display="flex" justifyContent="center" margin={2}>
                    <IconButton onClick={handleEditButton}>
                      <EditCalendarOutlinedIcon
                        sx={{ fontSize: 25, color: "rgb(72,171,83)" }}
                      />
                    </IconButton>{" "}
                    <IconButton onClick={handleEventClose}>
                      <CancelOutlinedIcon
                        sx={{ fontSize: 25, color: "antiquewhite" }}
                      />
                    </IconButton>{" "}
                  </Typography>
                </>
              )}
            </div>
          </div>
        </Modal>
      </Grid>
      <Grid item xs={4}>
        <BookingForm
          selectedRoomData={selectedRoomData}
          setSelectedRoomData={setSelectedRoomData}
          setBookingForm={setBookingForm}
          bookingForm={bookingForm}
          roomId={id}
          events={events}
          setEvents={setEvents}
        />
      </Grid>
    </Grid>
  );
};

export default ViewAvailability;
