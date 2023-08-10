import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { getMeetingRooms } from "../auth/firebase";
import OverviewImgCard from "../components/OverviewImgCard";

const Overview = () => {
  const [overviewData, setOverviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const data = await getMeetingRooms();
    console.log("overview data - ", data);
    setOverviewData(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //   const meetingRoomsInfo = overviewData.map((ele, index) => {
  //     return (
  //       <OverviewImgCard
  //         key={ele.id}
  //         capacity={ele.capacity}
  //         name={ele.name}
  //         meetingRoomId={ele.meetingRoomId}
  //         size={ele.size}
  //         id={ele.id}
  //         equipment={ele.equipment}
  //         url={ele.photoUrl}
  //       />
  //     );
  //   });

  return (
    <div>
      <Grid container xs={12}>
        <Grid
          item
          xs={12}
          sx={{
            p: 2,
            margin: "8rem 3rem",
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
              />
            ))
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
