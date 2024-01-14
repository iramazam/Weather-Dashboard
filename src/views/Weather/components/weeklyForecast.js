import React from "react";
import { Grid, Typography } from "@mui/material";
import { convertTemperature } from "../../../utils/utils";
import { CELSIUS, WEATHER_ICON_URL } from "../constants/constants";
import {
  TileHeading,
  WeeklyForecastContainer,
  WeeklyForecastTiles,
  BoldTypography,
} from "../styles/weatherStyles";

const WeeklyForecastComponent = ({ dailyForecasts, temperatureUnit }) => {
  return (
    <>
      <TileHeading>Weekly Forecast</TileHeading>

      <WeeklyForecastContainer>
        {dailyForecasts?.map((dayForecast, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={1}>
            <WeeklyForecastTiles>
              <BoldTypography gutterBottom>{dayForecast.day}</BoldTypography>
              <img
                src={`${WEATHER_ICON_URL}${dayForecast.weatherIcon}.png`}
                alt="Weather condition"
              />
              <Typography gutterBottom>
                {"H: "}
                {convertTemperature(
                  dayForecast.highestTemp,
                  temperatureUnit
                )}{" "}
                {temperatureUnit === CELSIUS ? "°C" : "°F"}
              </Typography>
              <Typography gutterBottom>
                {"L: "}
                {convertTemperature(
                  dayForecast.lowestTemp,
                  temperatureUnit
                )}{" "}
                {temperatureUnit === CELSIUS ? "°C" : "°F"}
              </Typography>
            </WeeklyForecastTiles>
          </Grid>
        ))}
      </WeeklyForecastContainer>
    </>
  );
};

export default WeeklyForecastComponent;
