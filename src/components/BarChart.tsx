import { styled } from "@mui/material/styles";
import { Grid, Box, Tooltip, IconButton, Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";
// assets
import {
  TrendingUp,
  AccessTime,
  BarChart as BarChartIcon,
} from "@mui/icons-material";

// Components
import Tabs from "./Tabs";

const TitleText = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  textAlign: "center",
}));

const BarChart = () => {
  return (
    <Grid
      container
      item
      xs={12}
      spacing={1}
      sx={{
        backgroundColor: "#fff",
        borderRadius: "4px",
        p: 2,
      }}
    >
      <Grid item xs={12}>
        <Box>
          <Grid container direction="column" spacing={1}>
            <Grid
              item
              container
              justifyContent="space-around"
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <Tooltip title="BarChart">
                  <IconButton>
                    <BarChartIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="AccessTime">
                  <IconButton>
                    <AccessTime />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="TrendingUp">
                  <IconButton>
                    <TrendingUp />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item xs zeroMinWidth />
            </Grid>
          </Grid>
        </Box>
        <ReactApexChart
          options={{
            chart: {
              id: "basic-bar",
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 0.6,
                opacityFrom: 1,
                opacityTo: 0.6,
                stops: [0, 50, 100],
                type: "vertical",
                shade: "#4129FA",
              },
            },
          }}
          series={[
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
          ]}
          type="bar"
          height="400"
          width="500"
        />
      </Grid>
      <Grid item xs={12}>
        <Tabs />
      </Grid>
      <Grid item xs={12}>
        <TitleText variant="h5">Product Transactions Chart</TitleText>
      </Grid>
    </Grid>
  );
};
export default BarChart;
