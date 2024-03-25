import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import { Grid, Box, Tooltip, IconButton, Typography } from "@mui/material";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  ZoomableGroup,
} from "react-simple-maps";
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

const geoUrl = "./features.json";
const colorScale = scaleLinear<string, number>()
  .domain([0.29, 0.68])
  .range(["#ffedea", "#ff5233"]);

const MapChart = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);

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
        <ComposableMap
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 200,
          }}
          height={400}
        >
          <ZoomableGroup center={[0, 0]} zoom={1}>
            <Sphere
              id="rsm-sphere"
              stroke="#E4E5E6"
              strokeWidth={0.5}
              fill="#fff"
            />
            <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
            {data.length > 0 && (
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const d = data.find((s: any) => s.ISO3 === geo.id);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={d ? colorScale(d["2017"]).toString() : "#F5F4F6"}
                      />
                    );
                  })
                }
              </Geographies>
            )}
          </ZoomableGroup>
        </ComposableMap>
      </Grid>
      <Grid item xs={12}>
        <Tabs />
      </Grid>
      <Grid item xs={12}>
        <TitleText variant="h5">Product Volume by Country</TitleText>
      </Grid>
    </Grid>
  );
};

export default MapChart;
