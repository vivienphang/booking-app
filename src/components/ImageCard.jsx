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
    navigate(`/room/${id}`)
  };

  return (
    <Card
      sx={{
        width: 1155,
        height: 600,
        p: 2,
        margin: 0.5,
        backgroundColor: "antiquewhite",
        borderRadius: "2%"
      }}
    >
      <CardMedia
        sx={{
          height: "75%",
          objectFit: "cover",
          borderRadius: "2%"
        }}
        image={meetingRoom1}
        title="meeting-room"
        
      />
      <CardContent>
        <Typography
          sx={{ fontSize: "30px", fontWeight: "bold" }}
          gutterBottom
          component="div"
          textAlign="center"
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: "14px" }}
          color="text.secondary"
          textAlign="center"
          display="block"
        >
          Capacity: up to {capacity} pax
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          onClick={handleViewMore}
          variant="outlined"
          sx={{
            padding: 0,
            width: 200,
            marginTop: -1,
          }}
        >
          View more
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
