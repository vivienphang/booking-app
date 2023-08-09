// import all the components into landing page
// components: Navbar (within Navbar: Logo, SignIn button or show Username)
// components: CarouselDiv (within CarouselDiv: Image, CircleButton)
import { Box, Grid } from "@mui/material";
import CarouselCards from "../components/CarouselCards";
import CarouselInfo from "../components/CarouselInfo"
import { useEffect, useState } from "react";
import { getMeetingRooms } from "../auth/firebase";

// components: OverviewButton
const LandingPage = () => {
  const [dataCollection, setDataCollection] = useState([]);

  const fetchData = async () => {
    const data = await getMeetingRooms();
    setDataCollection(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    // <Box display="flex" justifyContent="center" alignItems="center" mt={8}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <CarouselInfo dataCollection={dataCollection}/>
        </Grid>
        <Grid item xs={8}>
          <CarouselCards dataCollection={dataCollection}/>
        </Grid>
      </Grid>
  
  );
};

export default LandingPage;
