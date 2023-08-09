import ImageCard from "./ImageCard";
import { useEffect, useState } from "react";
import { getMeetingRooms } from "../auth/firebase";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const CarouselCards = ({ dataCollection }) => {
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
      />
    );
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
        <Carousel
          sx={{
            width: 700,
            height: 650,
            position: "relative",
            overflow: "hidden",
            // backgroundColor: "green",
          }}
          animation="slide"
          indicators={true}
          timeout={500}
          // navButtonsAlwaysVisible={true}
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
