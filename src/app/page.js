import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideBar from "@/components/ui/SideBar/SideBar";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <LatestNews></LatestNews>
        </Grid>
        <Grid item xs={6} md={4}>
          <SideBar></SideBar>
        </Grid>

      </Grid>
    </div>
  );
};

export default HomePage;