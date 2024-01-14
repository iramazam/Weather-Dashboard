//fetching day from date
export const getDayFromDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const options = { weekday: "short" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

//fetching time from timestamp
export const formatTimestampToTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

//fetching daily forecast data
export const getDailyTemperature = (dailyForecastData) => {
  if (!dailyForecastData) {
    return [];
  }

  //excluding the first day (current day) from the forecast
  const dailyForecasts = dailyForecastData.slice(1).map((dayForecast) => ({
    day: getDayFromDate(dayForecast.dt),
    highestTemp: dayForecast.temp.max,
    lowestTemp: dayForecast.temp.min,
    weatherIcon: dayForecast.weather[0].icon,
    weatherCondition: dayForecast.weather[0].main,
  }));

  return dailyForecasts;
};

//fetching hourly forecast data
export const getHourlyTemperature = (hourlyForecastData) => {
  if (!hourlyForecastData) {
    return [];
  }

  //getting current time in timestamp
  const currentTimeStamp = Math.floor(Date.now() / 1000);

  //filtering the hourly forecasts that are before the current time and showing only the next 24 hours
  const hourlyForecasts = hourlyForecastData
    .filter(
      (hourlyForecast) =>
        hourlyForecast.dt > currentTimeStamp &&
        hourlyForecast.dt <= currentTimeStamp + 24 * 3600
    )
    .map((hourlyForecast) => ({
      time: formatTimestampToTime(hourlyForecast.dt),
      temperature: hourlyForecast.temp,
      weatherIcon: hourlyForecast.weather[0].icon,
      weatherCondition: hourlyForecast.weather[0].main,
    }));

  return hourlyForecasts;
};

//converting temperature to fahrenheit and rounding to two decimal places
export const convertTemperature = (temperature, targetUnit) => {
  if (targetUnit === "fahrenheit") {
    return Math.round(((temperature * 9) / 5 + 32) * 100) / 100;
  } else {
    return Math.round(temperature * 100) / 100;
  }
};
