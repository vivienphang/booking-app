import ImageCard from "./ImageCard";
import Carousel from "react-material-ui-carousel";
import { useMediaQuery } from "@mui/material";

const CarouselCards = ({
  dataCollection,
  activeIndex,
  setActiveIndex,
}) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const meetingRoomsInfo = dataCollection.map((ele, index) => {
    return (
      <ImageCard
        key={ele.id}
        capacity={ele.capacity}
        name={ele.name}
        meetingRoomId={ele.meetingRoomId}
        size={ele.size}
        id={ele.id}
        equipment={ele.equipment}
        url={ele.photoUrl}
      />
    );
  });
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % dataCollection.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + dataCollection.length) % dataCollection.length
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        height: isMobile ? "auto" : "620px",
        padding: "1px"
      }}
    >
      <Carousel
        index={activeIndex}
        next={handleNext}
        prev={handlePrev}
        sx={{
          width: isMobile ? 450 : 900,
          height: isMobile ? 290 : 490,
          position: "relative",
          overflow: "hidden",
          marginRight: isMobile ? "0" : "24px",
          paddingBottom: isMobile ? "24px" : "0",
          
        }}
        animation="slide"
        indicators={false}
        autoPlay={false}
        timeout={500}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          style: {
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            padding: "20px",
          },
        }}
      >
        {meetingRoomsInfo}
      </Carousel>
    </div>
  );
};

export default CarouselCards;
