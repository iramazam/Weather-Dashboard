import { styled } from "@mui/system";
import {
  Grid,
  TextField,
  Paper,
  Typography,
  LinearProgress,
} from "@mui/material";
import Button from "../../../components/Button/Button";

//Weather.js
export const MainContainer = styled("div")({
  backgroundColor: "#F9F9F9",
  minHeight: "100vh",
});

export const GridContainerSearch = styled(Grid)({
  justifyContent: "flex-end",
  alignItems: "center",
});

export const GridContainerLoader = styled(Grid)({
  justifyContent: "center",
  alignItems: "center",
});

export const SearchButton = styled(Button)({
  "&:hover": {
    backgroundColor: "transparent",
  },
});

export const CustomTextField = styled(TextField)({
  width: "300px",
  height: "48px",
  "& .MuiInputBase-input": {
    height: "15px",
  },
  marginLeft: "20px",
});

export const Loader = styled("div")({
  backgroundColor: "#F9F9F9",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

//selectCity.js
export const SelectCityTile = styled(Paper)({
  backgroundColor: "#AACBFC",
  borderRadius: "20px",
  height: "200px",
  margin: "130px 400px 0px 400px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const SelectCityTypography = styled(Typography)({
  fontSize: "20px",
  textShadow: "0.2px 0.2px 0.5px #000",
});

//currentWeather.js
export const CurrentWeatherTile = styled(Paper)({
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  height: "300px",
  margin: "40px 70px 40px 70px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
});

export const CurrentWeatherImage = styled("img")({
  width: "100%",
  height: "100%",
});

export const CurrentWeatherDetails = styled("div")({
  position: "absolute",
  bottom: "20px",
  left: "20px",
  color: "white",
  textShadow: "1px 1px 2px #000",
  zIndex: 1,
});

//currentWeatherDetails.js
export const StyledGrid = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const WeatherDetailTile = styled(Paper)({
  padding: "10px",
  height: "150px",
  margin: "20px",
  backgroundColor: "#AACBFC",
  borderRadius: "15px",
  border: "2px solid white",
});

export const StyledLinearProgress = styled(LinearProgress)({
  height: "8px",
  borderRadius: "4px",
  backgroundColor: "#e0e0e0",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "black",
    borderRadius: "4px",
  },
});

export const TileHeading = styled(Typography)({
  paddingLeft: "30px",
});

//hourlyForecast.js
export const HourlyForecastTile = styled(Paper)({
  display: "flex",
  alignItems: "center",
  overflowX: "auto",
  padding: "10px",
  textAlign: "center",
  height: "150px",
  margin: "20px",
  borderRadius: "15px",
  border: "2px solid #80AAEB",
});

export const HourlyForecastGrid = styled(Grid)({
  justifyContent: "center",
  direction: "column",
  marginRight: "40px",
});

//weeklyForecast.js
export const WeeklyForecastContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  paddingBottom: "30px",
});

export const WeeklyForecastTiles = styled(Paper)({
  padding: "10px",
  textAlign: "center",
  height: "150px",
  width: "110px",
  margin: "20px",
  borderRadius: "15px",
  border: "2px solid #80AAEB",
});

export const BoldTypography = styled(Typography)({
  fontWeight: "bold",
});
