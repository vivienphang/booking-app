import { Grid, Typography, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { getRoomDataById } from "../auth/firebase";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./roomDisplay.module.css";
import {equipmentIcons} from "../assets/EquipmentIcons";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "3%",
});

const RoomDisplay = () => {
  const [roomDataById, setRoomDataById] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    const data = await getRoomDataById(id);
    console.log("data in room display -", data);
    setRoomDataById(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // View availability button handler
  const handleViewAvailability = () => {
    console.log("availability btn clicked");
    navigate(`/room/${id}/availability`);
  };

  return (
    <Grid container spacing={2} mt={14} ml={2} mb={6} p={1}>
      <Grid item xs={6} alignItems="center">
        <Img
          alt="meeting-room-24"
          src={roomDataById.photoUrl}
          height="600"
          width="800"
        />
      </Grid>
      <Grid item xs={4} sm container>
        <Grid item xs container direction="column">
          <Grid item xs>
            <Typography
              textAlign="center"
              gutterBottom
              sx={{ fontSize: "80px", fontWeight: "bold" }}
              component="div"
            >
              {roomDataById.name}
            </Typography>
            <Typography textAlign="center" variant="h5" mb={2}>
              Capacity: up to {roomDataById.capacity} pax
            </Typography>
            <Typography
              textAlign="center"
              variant="body2"
              gutterBottom
              color="text.secondary"
              mb={8}
            >
              Room size: {roomDataById.size}
            </Typography>
            <Typography textAlign="center" variant="h5" gutterBottom>
              Equipment:
            </Typography>
            {roomDataById ? (
              <Typography textAlign="center" color="text.secondary">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {roomDataById.equipment?.map((item, index) => {
                    const IconComponent = equipmentIcons[item];
                    return (
                      <li key={index}>
                        {IconComponent && <IconComponent />} {item}
                      </li>
                    );
                  })}
                </ul>
              </Typography>
            ) : (
              <Typography textAlign="center" color="text.secondary">
                Loading...
              </Typography>
            )}
          </Grid>
          <Grid item textAlign="center">
            <Chip
              className={styles.ChipButton}
              label="View Availability"
              onClick={handleViewAvailability}
            ></Chip>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RoomDisplay;
