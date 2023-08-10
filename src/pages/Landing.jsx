// import all the components into landing page
// components: Navbar (within Navbar: Logo, SignIn button or show Username)
// components: CarouselDiv (within CarouselDiv: Image, CircleButton)
import { Grid } from "@mui/material";
import CarouselCards from "../components/CarouselCards";
import CarouselInfo from "../components/CarouselInfo";
import PromoHeader from "../components/PromoHeader";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getMeetingRooms } from "../auth/firebase";

const LandingPage = () => {
  const [dataCollection, setDataCollection] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchData = async () => {
    const data = await getMeetingRooms();
    setDataCollection(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ marginTop: "5rem" }}>
      <PromoHeader />
      <div>
        <Grid container p={4}>
          <Grid item xs={5}>
            <CarouselInfo
              dataCollection={dataCollection}
              activeIndex={activeIndex}
            />
          </Grid>
          <Grid item xs={7}>
            <CarouselCards
              dataCollection={dataCollection}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              onSlideChange={handleSlideChange}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LandingPage;
