import {
  Chip,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import styles from "./carouselinfo.module.css";
const CarouselInfo = ({ dataCollection, activeIndex }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  if (dataCollection.length === 0) {
    return <div>LOADING...</div>;
  }
  const room = dataCollection[activeIndex];
  return (
    <div
      id="carousel-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Card
        id="carousel-card-info"
        className={styles.CarouselCard}
        elevation={0}
      >
        <CardContent display="flex" flexDirection="column">
          <Typography
            textAlign="left"
            marginBottom={isMobile ? "10px" : "80px"}
          >
            <span className={styles.CarouselText}>take a sneak peek...</span>
          </Typography>
          <Typography marginBottom="10px">
            <span className={styles.CarouselKeyName}>Room: </span>
            <Chip
              label={`${room.name}`}
              sx={{
                backgroundColor: "rgb(20, 80, 70, 0.9)",
                color: "antiquewhite",
                padding: "5px 15px",
                fontSize: "16px",
                fontFamily: "Poppins, sans-serif",
                height: isMobile ? "28px" : "38px",
                marginLeft: "10px",
              }}
            />
          </Typography>
          <Typography marginBottom="10px">
            <span className={styles.CarouselKeyName}>Capacity: </span>
            <Chip
              label={`up to ${room.capacity} pax`}
              sx={{
                backgroundColor: "rgb(20, 80, 70, 0.9)",
                height: isMobile ? "28px" : "38px",
                marginLeft: "10px",
                color: "antiquewhite",
                padding: "5px 15px",
                fontSize: "16px",
                fontFamily: "Poppins, sans-serif",
              }}
            />
          </Typography>
          <Typography marginBottom="10px">
            <span className={styles.CarouselKeyName}>Size: </span>
            <Chip
              label={`${room.size}`}
              sx={{
                backgroundColor: "rgb(20, 80, 70, 0.9)",
                height: isMobile ? "28px" : "38px",
                marginLeft: "10px",
                color: "antiquewhite",
                padding: "5px 15px",
                fontSize: "16px",
                fontFamily: "Poppins, sans-serif",
              }}
            />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarouselInfo;
