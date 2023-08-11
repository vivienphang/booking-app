import {
  Alert,
  AlertTitle,
  Chip,
  Grid,
  TextField,
  Typography,
  // DatePicker,
} from "@mui/material";
import { getRoomDataById } from "../auth/firebase";
import { useState, useEffect } from "react";
import styles from "./bookingForm.module.css";
import { addNewBooking } from "../auth/firebase";

const BookingForm = ({
  selectedRoomData,
  setSelectedRoomData,
  bookingForm,
  setBookingForm,
  roomId,
  events,
  setEvents,
}) => {
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const [successAlertOpen, setSuccessAlertOpen] = useState(false);
  console.log("BookingForm initial state: ", bookingForm);
  const fetchData = async () => {
    const data = await getRoomDataById(roomId);
    setSelectedRoomData(data);
    console.log("Selected room - ", data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFormInput = (e) => {
    setBookingForm((prev) => {
      return {
        ...prev,
        roomName: selectedRoomData.name,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any required field is empty
    if (
      !bookingForm.title ||
      !bookingForm.date ||
      !bookingForm.startTime ||
      !bookingForm.endTime ||
      !bookingForm.username
    ) {
      setErrorAlertOpen(true); // Open the error alert
      return;
    }
    const newBooking = await addNewBooking(bookingForm);

    if (newBooking) {
      console.log("Handle submit new booking - ", newBooking);
      setEvents([
        ...events,
        {
          title: newBooking.newBooking.title,
          date: newBooking.newBooking.date,
          start: `${newBooking.newBooking.date}T${newBooking.newBooking.startTime}:00`,
          end: `${newBooking.newBooking.date}T${newBooking.newBooking.endTime}:00`,
        },
      ]);
      setSuccessAlertOpen(true);
      setTimeout(() => {
        setSuccessAlertOpen(false); // Close the success alert after 3 seconds
      }, 3000);
    } else {
      setErrorAlertOpen(true);
    }
    // reset the form
    setBookingForm({
      title: "",
      date: "",
      startTime: "",
      endTime: "",
      username: "",
    });
  };

  const handleAlertClose = () => {
    setErrorAlertOpen(false);
  };

  return (
    <>
      <Typography gutterBottom textAlign="center" mb={6} mt={8}>
        <span className={styles.bookingHeader}>Secure your next meeting</span>
      </Typography>
      <Typography gutterBottom textAlign="center" marginBottom={5}>
        <span className={styles.roomKey}>Room: </span>
        <span className={styles.roomValue} name="roomName">
          {selectedRoomData.name}
        </span>
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} textAlign="center" justifyContent="center">
          <Grid item xs={12}>
            <TextField
              label="Title"
              placeholder="Add a title"
              type="text"
              name="title"
              value={bookingForm.title}
              onChange={handleFormInput}
              InputLabelProps={{
                shrink: true,
              }}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Date"
              type="date"
              name="date"
              value={bookingForm.date}
              onChange={handleFormInput}
              InputLabelProps={{
                shrink: true,
              }}
              required
              fullWidth
              InputProps={{
                min: new Date().toISOString().split("T")[0],
              }}
            />
            {/* <DatePicker
              label="Date of meeting"
              value={bookingForm.date}
              onChange={handleFormInput}
            /> */}
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Start Time"
              type="time"
              name="startTime"
              value={bookingForm.startTime}
              onChange={handleFormInput}
              InputLabelProps={{
                shrink: true,
              }}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="End Time"
              type="time"
              name="endTime"
              value={bookingForm.endTime}
              onChange={handleFormInput}
              InputLabelProps={{
                shrink: true,
              }}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Booked by"
              placeholder="Your name"
              type="text"
              name="username"
              value={bookingForm.username}
              onChange={handleFormInput}
              InputLabelProps={{
                shrink: true,
              }}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Chip
              className={styles.ChipButton}
              label="Book Meeting Room"
              onClick={handleSubmit}
            ></Chip>
          </Grid>
        </Grid>
      </form>
      {successAlertOpen && (
        <Alert
          severity="success"
          onClose={handleAlertClose}
          sx={{
            borderRadius: "20px",
            backgroundColor: "rgb(20,80,70)",
            color: "antiquewhite",
          }}
        >
          Booking successful!
        </Alert>
      )}
      {errorAlertOpen && (
        <Alert
          sx={{
            borderRadius: "20px",
            backgroundColor: "rgb(200,80,65, 0.5)",
            color: "antiquewhite",
          }}
          severity="error"
          onClose={handleAlertClose}
          open={errorAlertOpen}
        >
          <AlertTitle>Error</AlertTitle>
          Please complete all fields.
        </Alert>
      )}
    </>
  );
};

export default BookingForm;
