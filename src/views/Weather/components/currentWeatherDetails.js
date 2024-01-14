import React from "react";
import { Grid, Typography } from "@mui/material";
import { Flare, WbTwilight } from "@mui/icons-material";
import { formatTimestampToTime } from "../../../utils/utils";
import {
  TileHeading,
  StyledGrid,
  StyledLinearProgress,
  WeatherDetailTile,
} from "../styles/weatherStyles";

const CurrentWeatherDetailComponent = ({ currentWeatherData }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <TileHeading>More details of today's weather</TileHeading>
      <WeatherDetailTile>
        <StyledGrid>
          <Flare />
          <Typography>
            Sunrise: {formatTimestampToTime(currentWeatherData.sys.sunrise)}
          </Typography>
          <WbTwilight />
          <Typography>
            Sunset: {formatTimestampToTime(currentWeatherData.sys.sunset)}
          </Typography>
        </StyledGrid>
        <br />
        <Typography>Humidity:</Typography>
        <StyledLinearProgress
          variant="determinate"
          value={currentWeatherData.main.humidity}
        />
        <br />
        <Typography>Wind Speed:</Typography>
        <StyledLinearProgress
          variant="determinate"
          value={currentWeatherData.wind.speed}
        />
      </WeatherDetailTile>
    </Grid>
  );
};

export default CurrentWeatherDetailComponent;
