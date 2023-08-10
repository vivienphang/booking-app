import styles from "./promoHeader.module.css";
import { Card, CardMedia, Chip, Grid, Typography,  } from "@mui/material";
import MainHeader from "../assets/LandingPageMain.jpeg";
// import kettleGif from "../assets/kettle.gif";
import teapot from "../assets/teapot.png";

const PromoHeader = () => {
  return (
    <div className={styles.Container}>
      <Grid container>
        <Grid item xs={6}>
          <Typography textAlign="center" marginTop="60px" marginBottom="55px">
            <span className={styles.TaglineHeaderText}>
              streamline your workspace
            </span>
          </Typography>
          <Typography textAlign="center" marginBottom="50px">
            <span className={styles.TaglineHeader}>
              Unlock seamless meeting room bookings now
            </span>
          </Typography>
          <Typography display="flex" flexDirection="column" alignItems="center">
            <img src={teapot} alt="teapot" className={styles.TeapotIcon}/>
            <Chip label="Tell me more" className={styles.ChipButton}/>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ borderRadius: "15px", mr: 5 }}>
            <CardMedia
              height="450px"
              width="400px"
              component="img"
              image={MainHeader}
              alt="landing page main photo"
            ></CardMedia>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default PromoHeader;
