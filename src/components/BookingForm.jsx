import { Grid, TextField, Typography, Button } from "@mui/material";
import { getRoomDataById } from "../auth/firebase";
import { useEffect } from "react";
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
    const newBooking = await addNewBooking(bookingForm);
    setEvents([...events, 
      {
        title: newBooking.title,
        date: newBooking.date,
        start: `${newBooking.date}T${newBooking.startTime}:00`,
        end: `${newBooking.date}T${newBooking.endTime}:00`,
      },
    ]);

    // reset the form
    setBookingForm({ title: "", date: "", startTime: "", endTime: "" });
    alert("Booking successful");
  };

  return (
    <>
      <Typography gutterBottom textAlign="center" marginBottom={6}>
        <span className={styles.bookingHeader}>Booking Form</span>
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
            />
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
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Book Meeting Room
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default BookingForm;
