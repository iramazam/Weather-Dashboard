import React from "react";
import { Grid } from "@mui/material";
import { SelectCityTile, SelectCityTypography } from "../styles/weatherStyles";

const SelectCityComponent = () => {
  return (
    <Grid item xs={12} sm={6} md={8}>
      <SelectCityTile>
        <SelectCityTypography>
          Please enter city to view weather details
        </SelectCityTypography>
      </SelectCityTile>
    </Grid>
  );
};

export default SelectCityComponent;
