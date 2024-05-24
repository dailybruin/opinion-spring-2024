import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import bear from "../images/landing.gif"

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #08091F;
`;

const Image = styled.img`
  width: 100vw;
  height: auto;
  object-fit: cover;
`;

const Credits = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 2.4vh;
    color: #f0e8ce;
    text-align: right;
  padding-right: 1%;
  padding-top: 0.5%;
  background-color: #08091F;
  ${mediaQueries.mobile} {
    font-size: 8px;
  }
`;

const Landing = ({landing}) => {
  console.log("Landing image:", landing.landing_image);
  console.log("Landing credits:", landing.landing_credits);

  return (
    <>
      <Container>
        <Image src={bear} alt="Landing image" />
      </Container>
      <Credits>{landing[0].landing_credits}</Credits>
    </>
  );
}

export default Landing;
