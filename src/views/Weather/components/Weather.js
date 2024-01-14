import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import SelectCityComponent from "./selectCity";
import CurrentWeatherComponent from "./currentWeather";
import CurrentWeatherDetailComponent from "./currentWeatherDetails";
import HourlyForecastComponent from "./hourlyForecast";
import WeeklyForecastComponent from "./weeklyForecast";
import CustomToggle from "../../../components/Toggle/Toggle";
import CustomSnackbar from "../../../components/Snackbar/Snackbar";
import {
  getDailyTemperature,
  getHourlyTemperature,
} from "../../../utils/utils";
import {
  MainContainer,
  GridContainerSearch,
  GridContainerLoader,
  SearchButton,
  CustomTextField,
  Loader,
} from "../styles/weatherStyles";

const Weather = (props) => {
  let {
    city,
    setCity,
    temperatureOptions,
    temperatureUnit,
    setTemperatureUnit,
    getWeather,
    currentWeatherData,
    hourlyForecastData,
    weeklyForecastData,
    getCustomWeatherImage,
    loader,
    snackbarState,
    setSnackbarState,
  } = props;

  const dailyForecasts = getDailyTemperature(weeklyForecastData);
  const hourlyForecasts = getHourlyTemperature(hourlyForecastData);

  return (
    <MainContainer>
      <GridContainerSearch container spacing={7}>
        <CustomToggle
          options={temperatureOptions}
          onChange={setTemperatureUnit}
        />
        <CustomTextField
          type="text"
          label="Enter city"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <SearchButton variant="outline" onClick={getWeather} text="Search" />
      </GridContainerSearch>

      {loader ? (
        <GridContainerLoader container>
          <Loader>
            <CircularProgress size={50} />
          </Loader>
        </GridContainerLoader>
      ) : (
        <>
          {currentWeatherData ? (
            <>
              <CurrentWeatherComponent
                currentWeatherData={currentWeatherData}
                temperatureUnit={temperatureUnit}
                getCustomWeatherImage={getCustomWeatherImage}
              />

              <Grid container spacing={1}>
                <CurrentWeatherDetailComponent
                  currentWeatherData={currentWeatherData}
                />

                <HourlyForecastComponent
                  hourlyForecasts={hourlyForecasts}
                  temperatureUnit={temperatureUnit}
                />
              </Grid>

              <WeeklyForecastComponent
                dailyForecasts={dailyForecasts}
                temperatureUnit={temperatureUnit}
              />
            </>
          ) : (
            <SelectCityComponent />
          )}
        </>
      )}

      <CustomSnackbar
        open={snackbarState.open}
        message={snackbarState.message}
        severity={snackbarState.severity}
        onClose={() => setSnackbarState({ ...snackbarState, open: false })}
      />
    </MainContainer>
  );
};

export default Weather;
