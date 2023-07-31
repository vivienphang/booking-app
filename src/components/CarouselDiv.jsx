import { Box, Icon, IconButton, Stack } from "@mui/material";
import ImageCard from "./ImageCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useEffect, useState } from "react";
import { getMeetingRooms } from "../auth/firebase";

const CarouselDiv = () => {
  const [dataCollection, setDataCollection] = useState([]);

  const fetchData = async () => {
    const data = await getMeetingRooms();
    console.log("Data in CarouselDiv - ", data)
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
    )
  })

  const handleNext = () => {
    console.log("NEXT --->");
  };
  const handlePrev = () => {
    console.log("<--- PREV");
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: 1200,
        height: 450,
        backgroundColor: "primary.dark",
      }}
    >
      <IconButton onClick={handlePrev}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <Stack direction="row" spacing={2}>
        {meetingRoomsInfo}
      </Stack>
      <IconButton onClick={handleNext}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default CarouselDiv;
