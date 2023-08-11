import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "./overviewImgCard.module.css";

const OverviewImgCard = ({
  capacity,
  id,
  meetingRoomId,
  name,
  size,
  equipment,
  selectedRoomId,
  url,
  location,
}) => {
  const navigate = useNavigate();
  console.log("URL:", url);

  // View more button handler
  const handleViewMore = () => {
    console.log("room id - ", id, "room name - ", name);
    navigate(`/room/${id}`);
  };

  return (
    <div style={{ display: "flex" }}>
      <Card
        onClick={handleViewMore}
        elevation={8}
        sx={{
          width: 250,
          height: 345,
          p: 1,
          m: 1,
          borderRadius: 8,
          backgroundColor: "rgb(200, 80, 65, 0.5)",
          border: "0.5px solid black",
          cursor: "pointer",
        }}
      >
        <CardMedia
          sx={{ height: "70%", width: "100%", borderRadius: 6 }}
          component="img"
          alt="meeting room"
          src={url}
        />
        <CardContent>
          <Typography className={styles.CardHeader}>{name}</Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <PersonIcon
                sx={{ color: "rgb(20, 80, 70)", mr: "2px", fontSize: "20px" }}
              />
              <Typography
                sx={{ fontFamily: "Poppins", color: "rgb(20, 80, 70)" }}
              >
                <span style={{ fontSize: "12px" }}>up to {capacity} </span>
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <LocationOnIcon
                sx={{ color: "rgb(20, 80, 70)", mr: "2px", fontSize: "20px" }}
              />
              <Typography
                sx={{ fontFamily: "Poppins", color: "rgb(20, 80, 70)" }}
              >
                <span style={{ fontSize: "12px" }}>{location}</span>
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverviewImgCard;
