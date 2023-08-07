import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Button,
  Grid,
  Modal,
  Typography,
  Stack,
  Icon,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import BookingForm from "../components/BookingForm";
import styles from "./calendar.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoomNames, getAllBookings } from "../auth/firebase";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

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
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [roomNames, setRoomNames] = useState([]);
  const [editedData, setEditedData] = useState({
    title: "",
    date: "",
    nameName: "",
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
    console.log("Edit button clicked");
    setIsEditMode(true);
    setEditedData({
      title: selectedEvent.title,
      roomName: selectedEvent.roomName,
      date: selectedEvent.start.toISOString().substring(0, 10),
    });
  };

  const handleSaveButton = async () => {
    try {
      // Perform the Firebase database update here using editedData
      // After successful update, close the modal and reset the editedData
      setIsModalOpen(false);
      setIsEditMode(false);
      console.log("Saving edited data...");
      console.log("Edited data: ", editedData);
      setEditedData({
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

  //   const fetchRoomNames = async () => {
  //     try {
  //       const names = await getAllRooms();
  //       console.log("Names - ", names);
  //       setRoomNames(names);
  //     } catch (err) {
  //       console.error("Error fetching room names: ", err);
  //     }
  //   };

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
  }, [events]);

  const formattedEvents = async () => {
    const formattedData = await Promise.all(
      bookingDataArray.map((bookingData) => ({
        title: bookingData.title,
        name: bookingData.roomName,
        date: new Date(bookingData.date).toLocaleDateString(),
        start: new Date(`${bookingData.date}T${bookingData.startTime}:00`),
        end: new Date(`${bookingData.date}T${bookingData.endTime}:00`),
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
    console.log("formatted data: ", formattedData);
    return formattedData;
  };

  return (
    <Grid container spacing={1} p={3}>
      <Grid item xs={8} className={styles.CalendarView}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          events={formattedEvents}
          displayEventTime={true}
          height={"80vh"}
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
              <Typography id="modal-title">
                <span className={styles.ModalHeader}>
                  {isEditMode ? "Edit Details" : "Details"}
                </span>
              </Typography>
              {selectedEvent && (
                <Stack>
                  {isEditMode ? (
                    <div display="flex" flexDirection="column">
                      <Typography>Title:</Typography>
                      <TextField
                        sx={{
                          backgroundColor: "bisque",
                          borderRadius: "25px",
                        }}
                        type="text"
                        value={editedData.title}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            title: e.target.value,
                          })
                        }
                      />
                      <Typography>Date:</Typography>
                      <TextField
                        sx={{ backgroundColor: "bisque", borderRadius: "25px" }}
                        type="date"
                        value={editedData.date}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            date: e.target.value,
                          })
                        }
                      />
                      <InputLabel sx={{ color: "bisque" }}>Room: </InputLabel>
                      <Select
                        sx={{ backgroundColor: "bisque", borderRadius: "25px" }}
                        value={editedData.roomName}
                        label="Room"
                      >
                        {roomNames.map((room, index) => (
                          <MenuItem key={index} value={room}>
                            {room}
                          </MenuItem>
                        ))}
                      </Select>
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
                            <AccessTimeOutlinedIcon />
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
                          <span className={styles.ModalKey}>Start time: </span>
                          <span className={styles.ModalValue}>
                            {selectedEvent.start.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </Typography>
                      </div>
                      <div display="flex">
                        <Typography id="modal-description">
                          <span className={styles.ModalKey}>End time: </span>
                          <span className={styles.ModalValue}>
                            {selectedEvent.end.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </Typography>
                      </div>
                    </>
                  )}
                </Stack>
              )}

              {isEditMode ? (
                <>
                  <button onClick={handleSaveButton}>Save</button>{" "}
                  <button onClick={handleEventClose}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={handleEditButton}>Edit</button>{" "}
                  <button onClick={handleEventClose}>Close</button>
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
