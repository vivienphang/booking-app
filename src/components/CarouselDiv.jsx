import { Box, Icon, IconButton } from "@mui/material";
import ImageCard from "./ImageCard";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const CarouselDiv = () => {
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
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <IconButton onClick={handleNext}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default CarouselDiv;
