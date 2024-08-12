import styles from "./promoHeader.module.css";
import {
  Card,
  CardMedia,
  Chip,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MainHeader from "../assets/LandingPageMain.jpeg";
import teapot from "../assets/teapot.png";
import { useNavigate } from "react-router-dom";

const PromoHeader = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleTellMore = () => {
    navigate("/room");
  };

  return (
    <div className={styles.Container}>
      <Grid container>
        <Grid item xs={12} sm={6} display="flex" flexDirection="column">
          {!isMobile && (
            <Typography
              textAlign="center"
              marginTop={isMobile ? "0" : "60px"}
              marginBottom={isMobile ? "0" : "55px"}
            >
              <span className={styles.TaglineHeaderText}>
                streamline your workspace
              </span>
            </Typography>
          )}
          <Typography
            textAlign="center"
            marginBottom={isMobile ? "14px" : "50px"}
            padding={isMobile ? 1 : 2}
          >
            <span className={styles.TaglineHeader}>
              Unlock seamless meeting room bookings now
            </span>
          </Typography>
          <Typography
            display="flex"
            flexDirection="column"
            alignItems="center"
            // marginTop={isMobile ? "0" : "0"}
          >
            {!isMobile && (
              <img src={teapot} alt="teapot" className={styles.TeapotIcon} />
            )}
            <Chip
              label="Tell me more"
              className={styles.ChipButton}
              onClick={handleTellMore}
            />
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          id="header-image-grid"
          display="flex"
          alignItems="center"
        >
          <Card
            sx={{
              borderRadius: "15px",
              display: "flex",
              alignContent: "center",
              mt: isMobile ? "20px" : "0",
              mx: isMobile ? "auto" : 5,
              maxWidth: isMobile ? "80%" : "80%",
            }}
          >
            <CardMedia
              component="img"
              image={MainHeader}
              alt="landing page main photo"
              sx={{
                height: isMobile ? "300px" : "450px",
                objectFit: "cover",
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default PromoHeader;
