import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ImageCard = ({
  capacity,
  id,
  meetingRoomId,
  name,
  size,
  equipment,
  selectedRoomId,
  url
}) => {
  const navigate = useNavigate();

  // View more button handler
  const handleViewMore = () => {
    console.log("room id - ", id, "room name - ", name);
    navigate(`/room/${id}`);
  };

  return (
    <Card
      elevation={20}
      sx={{
        width: "100%",
        height: "450px",
        margin: 1,
        backgroundColor: "transparent",
        display: "flex",
      }}
    >
      <CardMedia
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
        image={url}
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
        <CardActions
          onClick={handleViewMore}
          sx={{ justifyContent: "center", cursor: "pointer" }}
        >
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
