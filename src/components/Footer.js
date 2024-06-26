import fb from '../images/socials/fb.svg'
import insta from '../images/socials/insta.svg'
import twitter from '../images/socials/twitter.svg'
import tiktok from '../images/socials/tiktok.svg'
import email from '../images/socials/email.svg'
import bottom_ribbon from '../images/bottom-curve.png'

import styled from 'styled-components'
import { mediaQueries } from '../shared/config';


const Container = styled.div`
	background-color: #08091F;
	height: auto;
  width: 100%;
	color: white;
	padding: 60px 0 10px 0;
    text-align: center;
	h1 {
		margin: 0;
		font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
    color: #F0E8CE;
	}
  /* margin-bottom: 20px; */
`

const Socials = styled.div`
    position: relative;
	margin-top: 20px;
  
	img {

    position: relative;
		margin: 0 20px;
    filter: brightness(0) saturate(100%) invert(87%) sepia(15%) saturate(271%) hue-rotate(9deg) brightness(103%) contrast(95%);
  }
	p {
    position: relative;
		margin: 80px 20px;
    color: #F0E8CE;
		${mediaQueries.mobile} {
			margin: 50px 20px;
		}
	}
`

const Flip = styled.div`
img {
  transform: scaleX(-1);
  margin-bottom: 100px;
  object-fit: contain; /* Keeps entire image visible */
  width: 100%;
  height: 100%;
}
`

const Footer = () => {
    return (
        <Container>
          <Flip>
          <img src={bottom_ribbon} />
          </Flip>
        <h1>DAILY BRUIN</h1>
        <Socials>
          <a href="https://www.instagram.com/dailybruin" target="_blank"><img src={insta}/></a>
          <a href="https://www.facebook.com/dailybruin" target="_blank"><img src={fb}/></a>
          <a href="https://www.twitter.com/dailybruin" target="_blank"><img src={twitter}/></a>
          <a href="https://www.tiktok.com/@dailybruin" target="_blank"><img src={tiktok}/></a>
          <a href="http://eepurl.com/cFEiZX" target="_blank"><img src={email}/></a>
          <p>Built with Suzy’s ♥ in Kerckhoff 118 by Annie Tran, Donny Rimer, Ed Nawrocki, Hameed Shaik, Katherine Li, Maria Martins, Marvin Deng, Michelle Kim, Nicole Ju, Richelle Shim, Sakshi Thoutireddy, Yifan Tang, Yubo Zhang. Designed by Helen Quach.</p>
        </Socials>
    </Container>
    )
  }
  
export default Footer;