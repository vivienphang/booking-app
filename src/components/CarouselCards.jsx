import ImageCard from "./ImageCard";
import Carousel from "react-material-ui-carousel";

const CarouselCards = ({
  dataCollection,
  activeIndex,
  setActiveIndex,
}) => {
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
        // index={index}
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
        height: "100vh",
        padding: "20px"
      }}
    >
      <Carousel
        index={activeIndex}
        next={handleNext}
        prev={handlePrev}
        sx={{
          width: 700,
          height: 650,
          position: "relative",
          overflow: "hidden",
          // backgroundColor: "green",
          
        }}
        animation="slide"
        indicators={true}
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
