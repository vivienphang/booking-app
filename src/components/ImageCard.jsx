import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import meetingRoom1 from "../assets/24-meeting-room.jpeg";

const ImageCard = ({
  capacity,
  id,
  meetingRoomId,
  name,
  size,
  equipment,
  selectedRoomId,
}) => {
  const navigate = useNavigate();

  // View more button handler
  const handleViewMore = () => {
    console.log("room id - ", id, "room name - ", name);
    navigate(`/room/${id}`);
  };

  return (
    <Card
      sx={{
        width: "690px",
        height: "600px",
        margin: 1,
        backgroundColor: "transparent",
        borderRadius: "2%",
        position: "relative",
        display: "flex",
      }}
    >
      <CardMedia
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
        image={meetingRoom1}
        title="meeting-room"
      />
      <CardContent
        sx={{
          position: "absolute", // Position the CardContent absolutely
          bottom: 0, // Position it at the bottom
          width: "100%", // Make it full width
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a background color
          padding: "5px", // Add padding
          zIndex: 1, // Ensure CardContent is above the CardMedia
          height: "20%",
        }}
      >
        <CardActions onClick={handleViewMore} sx={{ justifyContent: "center", cursor: "pointer"}}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "antiquewhite",
              fontSize: "30px",
              mt: 5,
            }}
            component="div"
            textAlign="center"
          >
            Room: <span style={{ fontWeight: "bold" }}>{name}</span>
          </Typography>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
