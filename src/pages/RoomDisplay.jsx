import { Grid, Typography, Chip, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { getRoomDataById } from "../auth/firebase";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./roomDisplay.module.css";
import { equipmentIcons } from "../assets/EquipmentIcons";

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
      <Grid
        item
        xs={4}
        sm
        container
        textAlign="center"
        justifyContent="center"
        display="block"
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            color: "rgb(20, 80, 70)",
            fontSize: "55px",
            margin: "0 auto",
            pb: "50px",
          }}
        >
          room info
        </Typography>
        <Grid item xs container direction="column">
          <Grid item xs>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "44px",
                color: "rgb(20,80,70)",
              }}
            >
              {roomDataById.name}
            </Typography>
            <Typography
              mb={1}
              sx={{
                fontFamily: "Poppins",
                fontSize: "18px",
                color: "rgb(20,80,70)",
              }}
            >
              Capacity: up to {roomDataById.capacity} pax
            </Typography>
            <Typography
              textAlign="center"
              fontSize="14px"
              gutterBottom
              color="text.secondary"
              mb={5}
            >
              Room size: {roomDataById.size}
            </Typography>
            <Typography
              textAlign="center"
              gutterBottom
              sx={{
                fontFamily: "Poppins",
                fontSize: "24px",
                color: "rgb(20,80,70)",
              }}
            >
              Equipment:
            </Typography>
            <Divider sx={{ color: "grey", width: "70%", margin: "0 auto" }} />
            {roomDataById ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  textAlign="center"
                  sx={{ fontFamily: "Poppins" }}
                  color="text.secondary"
                >
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    {roomDataById.equipment?.map((item, index) => {
                      const IconComponent = equipmentIcons[item];
                      return (
                        <li
                          key={index}
                          style={{
                            marginRight: "10px",
                            marginBottom: "20px",
                            flex: "0 0 calc(50% - 10px)",
                          }}
                        >
                          <div style={{ display: "block" }}>
                            {IconComponent && <IconComponent />}
                            <Typography sx={{ textAlign: "center" }}>
                              {item}
                            </Typography>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </Typography>
              </div>
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
