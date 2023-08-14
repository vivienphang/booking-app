import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { getMeetingRooms } from "../auth/firebase";
import OverviewImgCard from "../components/OverviewImgCard";

const Overview = () => {
  const [overviewData, setOverviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const data = await getMeetingRooms();
    // console.log("overview data - ", data);
    setOverviewData(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Grid container xs={12}>
        <Grid item xs={12} sx={{ margin: "8rem 0rem 1rem 3rem", p: 2 }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "bold",
            }}
          >
            <span style={{ color: "rgb(20, 80, 70)", fontSize: "40px" }}>
              all rooms
            </span>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            p: 2,
            marginBottom: "3rem",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            overviewData.map((ele, index) => (
              <OverviewImgCard
                key={ele.id}
                capacity={ele.capacity}
                name={ele.name}
                meetingRoomId={ele.meetingRoomId}
                size={ele.size}
                id={ele.id}
                equipment={ele.equipment}
                url={ele.photoUrl}
                location={ele.location}
              />
            ))
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
