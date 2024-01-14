import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Container, Title } from "./homeStyles";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/weather");
  };

  return (
    <Container>
      <Title variant="h4">Weather Forecast</Title>
      <Button
        variant="contained"
        text="Get Started"
        onClick={handleGetStartedClick}
      />
    </Container>
  );
};

export default Home;
