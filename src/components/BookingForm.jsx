import { Grid, TextField, Typography, Button } from "@mui/material";
import { getRoomDataById } from "../auth/firebase";
import { useEffect } from "react";
import styles from "./bookingForm.module.css";

const BookingForm = ({ bookingData, setBookingData, roomId }) => {
  const fetchData = async () => {
    const data = await getRoomDataById(roomId);
    setBookingData(data);
    console.log("Data in booking form - ", data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <Typography gutterBottom textAlign="center" marginBottom={6}>
        <span className={styles.bookingHeader}>Booking Form</span>
      </Typography>
      <Typography gutterBottom textAlign="center" marginBottom={5}>
        <span className={styles.roomKey}>Room: </span>
        <span className={styles.roomValue}>{bookingData.name}</span>
      </Typography>
      <form>
        <Grid container spacing={3} textAlign="center" justifyContent="center">
          <Grid item xs={12}>
            <TextField
              label="Title"
              placeholder="Add a title"
              type="text"
              name="title"
              value={bookingData.date}
              // onChange={handleChange}
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
              value={bookingData.date}
              // onChange={handleChange}
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
              // value={bookingData.startTime}
              // onChange={handleChange}
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
              // value={bookingData.endTime}
              // onChange={handleChange}
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
