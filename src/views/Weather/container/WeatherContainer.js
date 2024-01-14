import React, { useEffect, useState, useMemo } from "react";
import Weather from "../components/Weather";
import weatherApi from "../../../api/weatherApi";

const WeatherContainer = () => {
  const [city, setCity] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [hourlyForecastData, setHourlyForecastData] = useState(null);
  const [weeklyForecastData, setWeeklyForecastData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [temperatureUnit, setTemperatureUnit] = useState("celsius");
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const temperatureOptions = [
    { value: "celsius", label: "°C" },
    { value: "fahrenheit", label: "°F" },
  ];

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    setLoader(true);
    try {
      if (city) {
        const data = await weatherApi.getWeatherData(city, setSnackbarState);
        setCurrentWeatherData(data?.currentWeather);
        setHourlyForecastData(data?.hourlyForecast);
        setWeeklyForecastData(data?.weeklyForecast);
      }
    } catch (error) {
    } finally {
      setLoader(false);
    }
  };

  const getCustomWeatherCondition = (temperature) => {
    const hotTemperatureRange = { min: 30, max: Infinity };
    const warmTemperatureRange = { min: 20, max: 29 };
    const coolTemperatureRange = { min: 10, max: 19 };
    const coldTemperatureRange = { min: -Infinity, max: 9 };

    if (temperature >= hotTemperatureRange.min) {
      return "hot";
    } else if (
      temperature >= warmTemperatureRange.min &&
      temperature <= warmTemperatureRange.max
    ) {
      return "warm";
    } else if (
      temperature >= coolTemperatureRange.min &&
      temperature <= coolTemperatureRange.max
    ) {
      return "cool";
    } else if (temperature <= coldTemperatureRange.max) {
      return "cold";
    } else {
      return "normal";
    }
  };

  const getCustomWeatherImage = (temperature) => {
    const customCondition = getCustomWeatherCondition(temperature);

    const customWeatherImages = {
      hot: "/images/hot.jpg",
      warm: "/images/warm.png",
      cool: "/images/cool.jpg",
      cold: "/images/cold.png",
      normal: "/images/normal.jpg",
    };

    return customWeatherImages[customCondition] || "/images/normal.jpg";
  };

  const props = useMemo(
    () => ({
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
    }),
    [
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
    ]
  );

  return (
    <div>
      <Weather {...props} />
    </div>
  );
};

export default WeatherContainer;
