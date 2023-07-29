import { Link, Outlet } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Grid, AppBar, Box, Toolbar } from "@mui/material";

const NavLayout = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={9} container spacing={1}>
              <Link to="/" style={{textDecoration: "none"}}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                  variant="h5"
                  color="white"
            
                >
                  Booking App
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={2} display="flex" justifyContent="space-evenly">
              <IconButton
                size="small"
                sx={{ p: 1 }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                  variant="h6"
                  color="white"
                >
                  Sign Up
                </Typography>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginTop={20}
      >
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default NavLayout;
