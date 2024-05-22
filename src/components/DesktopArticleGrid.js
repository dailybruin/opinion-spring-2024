import leftsquiggle from '../images/articles-left.png'
import rightsquiggle from '../images/articles-right.png'
import rightcurve from '../images/right-curve.png'
import ArticleCard from './ArticleCard'
import styled from 'styled-components'



const GridContainer = styled.div`
	background-color: #08091F;
	height: auto;
	color: #F0E8CE;
    text-align: center;
    /*display: grid;
    grid-template-columns: repeat(3,1fr);*/
  /* margin-bottom: 20px; */
  position: relative;
`; 

// this section is for NOT resizing the article title + squiggle with page size
/* const Title = styled.div`
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
`; */

//this WILL resize article title + squiggle with page size
const Title = styled.div`
    h1 {
        margin: 20px 0px 0px 0px;
        font-family: 'Poppins';
        font-size: 4.4vw;
        font-weight: 600;
        line-height: 96px;
        flex-grow: 1;
    }
    img {
        display: block;
        width: 100%;
        height: auto;
        max-width: 100%;
        object-fit: contain;
        overflow: hidden;
    }
    display: flex;
    column-gap: 1vw;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
`;

const Articles = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    & > div {
        position: relative;
    }

    & > div:nth-child(even) {
        margin-top: 25em;
    }

    & > div:nth-child(odd) {
        left: 2em;
    }
`;

const DesktopArticleGrid = ({ articles }) => {
    return (

        <GridContainer>
            <Title>
                <img src={leftsquiggle}/>
                <h1>ARTICLES</h1>
                <img src={rightsquiggle}/>
            </Title>
            <Articles>
            {articles.map((article) => {
                return <ArticleCard props={article} />;
             })}
            </Articles>
        </GridContainer>

        
    )
  }

export default DesktopArticleGrid;