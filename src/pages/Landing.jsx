// import all the components into landing page
// components: Navbar (within Navbar: Logo, SignIn button or show Username)
// components: CarouselDiv (within CarouselDiv: Image, CircleButton)
import { Box } from "@mui/material";
import CarouselDiv from "../components/CarouselDiv";

// components: OverviewButton
const LandingPage = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={8}>
      <CarouselDiv />
    </Box>
  );
};

export default LandingPage;
