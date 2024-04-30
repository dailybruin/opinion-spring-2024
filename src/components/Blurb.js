import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import ribbon from "../images/blurb-curve.png";
import cassette from "../images/yellow-cassette.png";

const ImageContainer = styled.div`
  padding-top: 12%;
  width: 100%;
  box-sizing: border-box;
  //   border-top-width: 20px;
  z-index: -1;
  ${mediaQueries.mobile} {
    border-width: 12px;
  }
`;
const BlurbContainer = styled.div`
  position: relative;
  top: -85px;
  overflow: hidden;
  ${mediaQueries.mobile} {
    top: -40px;
    font-size: 10px;
  }
`;

const OverlayText = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 1.5vh;
  color: #f0e8ce;
  ${mediaQueries.mobile} {
    width: 250px;
    height: 15%;
    font-size: 1vh;
  }
`;

const OverlayCassetteImage = styled.img`
  position: absolute;
  height: 23%;
  bottom: 11%;
  right: -5%;
  transform: rotate(130deg);
  ${mediaQueries.mobile} {
    height: 30%;
    bottom: 5%;
    right: -20%;
  }
`;

const Image = styled.img`
  width: 90%;
  height: 100%;
  margin: auto;
  ${mediaQueries.mobile} {
    width: 120%;
    transform: translateX(-80px);
  }
`;
const Blurb = (props) => {
  return (
    <ImageContainer>
      <BlurbContainer>
        <Image src={ribbon} />
        <OverlayCassetteImage src={cassette} />
        <OverlayText>{props.blurb_text}</OverlayText>
      </BlurbContainer>
    </ImageContainer>
  );
};

export default Blurb;