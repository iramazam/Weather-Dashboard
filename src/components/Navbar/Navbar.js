import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../Button/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleWeatherClick = () => {
    navigate("/weather");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#F9F9F9" }}>
      <Toolbar>
        <Button
          variant="outline"
          text="Home"
          onClick={handleHomeClick}
          active={location.pathname === "/"}
        />
        <Button
          variant="outline"
          text="Weather"
          onClick={handleWeatherClick}
          active={location.pathname === "/weather"}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
