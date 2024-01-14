import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({ variant, color, onClick, text, active }) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      style={{
        backgroundColor: "#F9F9F9",
        color: "black",
        borderBottom: active ? "2px solid #000" : "none",
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
