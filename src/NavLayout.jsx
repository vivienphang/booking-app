import { Link, Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Grid, AppBar, Toolbar, Button } from "@mui/material";
import styles from "./navLayout.module.css";
import Footer from "./components/Footer";

const NavLayout = () => {

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
        style={{ minHeight: "100vh" }}
      >
        <AppBar>
          <Toolbar className={styles.Navbar}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={9} container spacing={1}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "Poppins",
                      fontSize: "24px",
                    }}
                    marginLeft={5}
                    color="rgb(20, 80, 70)"
                  >
                    book it .
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={2} display="flex" justifyContent="space-evenly">
                <Button
                  size="small"
                  variant="text"
                  sx={{ p: 1, color: "rgb(20, 80, 70)" }}
                >
                  Member Login
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginTop={1}
        >
          <Grid item xs={12}>
            <Outlet />
          </Grid>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default NavLayout;
