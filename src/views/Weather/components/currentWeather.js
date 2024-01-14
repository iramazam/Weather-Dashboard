import React from "react";
import { Grid, Typography } from "@mui/material";
import { convertTemperature } from "../../../utils/utils";
import { CELSIUS, WEATHER_ICON_URL } from "../constants/constants";
import {
  CurrentWeatherTile,
  CurrentWeatherImage,
  CurrentWeatherDetails,
  StyledGrid,
} from "../styles/weatherStyles";

const CurrentWeatherComponent = ({
  currentWeatherData,
  temperatureUnit,
  getCustomWeatherImage,
}) => {
  return (
    <Grid item xs={12} sm={6} md={8}>
      <CurrentWeatherTile>
        <CurrentWeatherImage
          src={getCustomWeatherImage(currentWeatherData.main.temp)}
          alt="Weather condition"
        />
        <CurrentWeatherDetails>
          <Typography variant="h3">
            {convertTemperature(currentWeatherData.main.temp, temperatureUnit)}{" "}
            {temperatureUnit === CELSIUS ? "°C" : "°F"}
          </Typography>
          <StyledGrid>
            <Typography>{currentWeatherData.weather[0].description}</Typography>
            <img
              src={`${WEATHER_ICON_URL}${currentWeatherData.weather[0].icon}.png`}
              alt="Weather condition"
            />
          </StyledGrid>
          <Typography>
            {"H: "}
            {convertTemperature(
              currentWeatherData.main.temp_max,
              temperatureUnit
            )}{" "}
            {temperatureUnit === CELSIUS ? "°C" : "°F"}
            {" L: "}
            {convertTemperature(
              currentWeatherData.main.temp_min,
              temperatureUnit
            )}{" "}
            {temperatureUnit === CELSIUS ? "°C" : "°F"}
          </Typography>
          <Typography variant="h6">
            {currentWeatherData.name}, {currentWeatherData.sys.country}
          </Typography>
        </CurrentWeatherDetails>
      </CurrentWeatherTile>
    </Grid>
  );
};

export default CurrentWeatherComponent;
