import React from "react";
import { Grid, Typography } from "@mui/material";
import { convertTemperature } from "../../../utils/utils";
import { CELSIUS, WEATHER_ICON_URL } from "../constants/constants";
import {
  TileHeading,
  HourlyForecastTile,
  HourlyForecastGrid,
} from "../styles/weatherStyles";

const HourlyForecastComponent = ({ hourlyForecasts, temperatureUnit }) => {
  return (
    <Grid item xs={12} sm={6} md={8}>
      <TileHeading>Upcoming hours</TileHeading>
      <HourlyForecastTile>
        {hourlyForecasts?.map((hourlyForecast, index) => (
          <HourlyForecastGrid container key={index}>
            <Typography>{hourlyForecast.time}</Typography>
            <Grid item>
              <img
                src={`${WEATHER_ICON_URL}${hourlyForecast.weatherIcon}.png`}
                alt="Weather condition"
              />
            </Grid>
            <Typography>
              {convertTemperature(hourlyForecast.temperature, temperatureUnit)}
              {temperatureUnit === CELSIUS ? "°C" : "°F"}{" "}
            </Typography>
          </HourlyForecastGrid>
        ))}
      </HourlyForecastTile>
    </Grid>
  );
};

export default HourlyForecastComponent;
