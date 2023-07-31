import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import meetingRoom1 from "../assets/24-meeting-room.jpeg";

const ImageCard = ({ capacity, id, meetingRoomId, name, size, equipment }) => {
  return (
    <Card
      sx={{
        width: 955,
        height: 400,
        p: 1,
        margin: 0.5,
      }}
    >
      <CardMedia
        sx={{
          height: "65%",
          objectFit: "cover",
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
          sx={{ fontSize: "12px" }}
          color="text.secondary"
          textAlign="center"
          display="block"
        >
          Capacity: up to {capacity} pax
        </Typography>
        {/* <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          display="block"
        >
          Equipment:
          <ul>
            {equipment.map((item, index) => (
              <li  key={index}>{item}</li>
            ))}
          </ul>
        </Typography> */}
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
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
