import ImageCard from "./ImageCard";
import { useEffect, useState } from "react";
import { getMeetingRooms } from "../auth/firebase";
import Carousel from "react-material-ui-carousel";

const CarouselDiv = () => {
  const [dataCollection, setDataCollection] = useState([]);

  const fetchData = async () => {
    const data = await getMeetingRooms();
    setDataCollection(data);
  };
  useEffect(() => {
    fetchData();
  }, []);


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
    <Carousel
      sx={{
        width: 1200,
        height: 800,
        position: "relative",
        overflow: "hidden",
        // backgroundColor: "primary.dark",
      }}
    >
      {meetingRoomsInfo}
    </Carousel>
  );
};

export default CarouselDiv;
