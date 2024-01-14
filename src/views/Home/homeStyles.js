import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Container = styled("div")({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${process.env.PUBLIC_URL}/images/home.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

export const Title = styled(Typography)({
  color: "#F9F9F9",
  textShadow: "1px 1px 2px #000",
  paddingBottom: "20px",
});
