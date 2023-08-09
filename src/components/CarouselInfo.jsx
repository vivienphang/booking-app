import { Typography, Card, CardContent } from "@mui/material";
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
        height: "100vh",
      }}
    >
      <Card
        elevation={0}
        sx={{
          marginLeft: "50px",
          width: "100%",
          height: "600px",
          borderRadius: "2%",
          position: "relative",
          display: "flex",
          backgroundColor: "transparent",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "black",
              fontSize: "30px",
            }}
            component="div"
            textAlign="center"
          >
            Room: <span style={{ fontWeight: "bold" }}>{room.name}</span>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarouselInfo;
