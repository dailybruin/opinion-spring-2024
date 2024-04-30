import leftsquiggle from '../images/articles-left.png'
import rightsquiggle from '../images/articles-right.png'
import rightcurve from '../images/right-curve.png'

import styled from 'styled-components'

const GridContainer = styled.div`
	background-color: #08091F;
	height: auto;
	color: #F0E8CE;
    text-align: center;
  /* margin-bottom: 20px; */
`;

const Title = styled.div`
    h1 {
        margin: 20px 20px 0px 20px;
        font-family: 'Poppins';
        font-size: 64px;
        font-weight: 600;
        line-height: 96px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center; 
`;

const MobileArticleGrid = () => {
    return (
        <GridContainer>
            <Title>
                <img src={leftsquiggle}/>
                <h1>ARTICLES</h1>
                <img src={rightsquiggle}/>
            </Title>

        </GridContainer>
    )
  }

export default MobileArticleGrid;