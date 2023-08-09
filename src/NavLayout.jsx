import { Link, Outlet } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import { Grid, AppBar, Box, Toolbar, Button } from "@mui/material";
import styles from "./navLayout.module.css"

const NavLayout = () => {
  const handleClick = () => {
    console.log("sign up")
  }
  return (
    <>
      <AppBar >
        <Toolbar className={styles.Navbar}>
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
                    fontFamily: "Poppins",
                    fontSize: "24px"
                    
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
                sx={{ p: 1, color: "rgb(20, 80, 70)"}}
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
        <Grid item xs={12} className={styles.OutletBackground}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default NavLayout;
