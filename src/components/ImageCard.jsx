import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import meetingRoom1 from "../assets/24-meeting-room.jpeg";

const ImageCard = () => {
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
          01
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. 
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small">View more</Button>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
