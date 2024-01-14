import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const CustomToggle = ({ options, onChange }) => {
  const [value, setValue] = useState(options[0].value);

  const handleToggleChange = (e, newValue) => {
    if (newValue !== null) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <ToggleButtonGroup value={value} exclusive onChange={handleToggleChange}>
      {options.map((option) => (
        <ToggleButton key={option.value} value={option.value}>
          {option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default CustomToggle;
