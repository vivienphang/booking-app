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
        maxWidth: 345,
        p: 1,
        margin: 0.5,
      }}
    >
      <CardMedia
        sx={{
          height: 250,
        }}
        image={meetingRoom1}
        title="meeting-room"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          display="block"
        >
          Capacity: {capacity}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          display="block"
        >
          Size: {size}
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
        <Button size="small">View more</Button>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
