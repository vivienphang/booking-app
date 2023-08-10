import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import styles from "./overviewImgCard.module.css";
// import THREE_PAX_V1 from "../assets/3pax-v1.jpeg";
// import FOUR_PAX_V1 from "../assets/4pax-v1.jpeg";
// import EIGHT_PAX_V1 from "../assets/8pax-v1.jpg";
// import FOURTEEN_PAX_V1 from "../assets/14pax-v1.jpeg";
// import TWENTYTWO_PAX_V1 from "../assets/22pax-v1.jpeg";
// import THREE_PAX_V1 from "assets/photoURL/3pax-v1.jpeg";
// import FOUR_PAX_V1 from "assets/photoURL/4pax-v1.jpeg";
// import EIGHT_PAX_V1 from "assets/photoURL/8pax-v1.jpg";
// import FOURTEEN_PAX_V1 from "assets/photoURL/14pax-v1.jpeg";
// import TWENTYTWO_PAX_V1 from "assets/photoURL/22pax-v1.jpeg";


const OverviewImgCard = ({
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
  console.log("URL:", url)

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
          sx={{ height: "70%", width: "100%", borderRadius: 6}}
          component="img"
          alt="meeting room"
          src={url}
        />
        <CardContent>
          <Typography className={styles.CardHeader}>
            {name}
          </Typography>
          <div style={{ display: "flex" }}>
            <PersonIcon sx={{ color: "rgb(20, 80, 70)", mr: "2px" }} />
            <Typography sx={{ fontFamily: "Poppins", color: "rgb(20, 80, 70)" }}>
              <span style={{ fontSize: "14px"}}>
                up to {capacity}{" "}
              </span>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverviewImgCard;
