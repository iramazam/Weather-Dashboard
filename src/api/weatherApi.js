import axios from "axios";
import { API_KEY, BASE_URL } from "../config";

const getWeatherData = async (city, setSnackbarState) => {
  try {
    //fetching current weather details by city
    const currentWeatherResponse = await axios.get(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const currentWeatherData = currentWeatherResponse.data;

    //fetching hourly and weekly forecast data using onecall endpoint
    const onecallResponse = await axios.get(
      `${BASE_URL}/onecall?lat=${currentWeatherData.coord.lat}&lon=${currentWeatherData.coord.lon}&exclude=minutely,alerts&appid=${API_KEY}&units=metric`
    );
    const onecallData = onecallResponse.data;

    return {
      currentWeather: currentWeatherData,
      hourlyForecast: onecallData.hourly,
      weeklyForecast: onecallData.daily,
    };
  } catch (error) {
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "Error fetching weather data. Please try again.";

    setSnackbarState({ open: true, message: errorMessage, severity: "error" });
    throw error;
  }
};

export default {
  getWeatherData,
};
