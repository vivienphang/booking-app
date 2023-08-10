import { Chip, Typography, Card, CardContent } from "@mui/material";
import styles from "./carouselinfo.module.css";
const CarouselInfo = ({ dataCollection, activeIndex }) => {
  if (dataCollection.length === 0) {
    return <div>LOADING...</div>;
  }
  const room = dataCollection[activeIndex];
  console.log("active index room data - ", room);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        // height: "100vh",
      }}
    >
      <Card
        elevation={0}
        sx={{
          marginLeft: "80px",
          marginTop: "150px",
          width: "100%",
          height: "400px",
          borderRadius: "2%",
          position: "relative",
          display: "flex",
          backgroundColor: "transparent",
        }}
      >
        <CardContent display="flex" flexDirection="column">
          <Typography textAlign="left" marginBottom="80px">
            <span className={styles.CarouselText}>take a sneak peek...</span>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "black",
              fontSize: "24px",
            }}
            marginBottom="10px"
          >
            Room:{" "}
            <Chip
              label={`${room.name}`}
              sx={{
                backgroundColor: "rgb(20, 80, 70, 0.9)",
                // fontWeight: "bold",
                color: "antiquewhite",
                padding: "5px 15px",
                fontSize: "20px",
                fontFamily: "Poppins, sans-serif",
                height: "38px",
                marginLeft: "10px"
              }}
            />
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "black",
              fontSize: "24px",
              
            }}
            marginBottom="10px"
          >
            Capacity:{" "}
            <Chip
              label={`up to ${room.capacity} pax`}
              sx={{
                backgroundColor: "rgb(20, 80, 70, 0.9)",
                height: "38px",
                marginLeft: "10px",
                color: "antiquewhite",
                padding: "5px 15px",
                fontSize: "20px",
                fontFamily: "Poppins, sans-serif",
              }}
            />
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "black",
              fontSize: "24px",
            }}
            marginBottom="10px"
          >
            Size:{" "}
            <Chip
              label={`${room.size}`}
              sx={{
                backgroundColor: "rgb(20, 80, 70, 0.9)",
                height: "38px",
                marginLeft: "10px",
                color: "antiquewhite",
                padding: "5px 15px",
                fontSize: "20px",
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
