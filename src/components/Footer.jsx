import { Divider, Grid, IconButton, Typography } from "@mui/material";
import styles from "./footer.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Footer = () => {
  return (
    <div
      style={{
        height: "200px",
        width: "100vw",
        backgroundColor: "rgb(20, 80, 70)",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
            <div className={styles.FooterContainer} >
          <Typography className={styles.FooterText}>FAQs</Typography>
          <Typography className={styles.FooterText}>Contact</Typography>
          <Typography className={styles.FooterText}>Terms and Conditions</Typography>
          <Typography className={styles.FooterText}>Privacy Policy</Typography>

            </div>
          <Divider className={styles.FooterDivider} />
          <div className={styles.MediaIconsContainer}>
            <Typography padding={2} className={styles.FooterText}>
            © 2023 Book It. All rights reserved.
            <IconButton>
            <FacebookIcon className={styles.MediaIcons}/>
            <InstagramIcon className={styles.MediaIcons}/>
            <PinterestIcon className={styles.MediaIcons}/>
            </IconButton>
            </Typography>

          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
