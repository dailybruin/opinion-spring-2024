import styled from 'styled-components'
import Orange from '../images/orange-cassette.png'
import Yellow from '../images/yellow-cassette.png'
import Red from '../images/red-cassette.png'
import Purple from '../images/purple-cassette.png'

const Container = styled.div`
    margin: 15px;
    background-color: #051626;
    width: 568.61px;
    height: 348.46px;
    transition: box-shadow 0.3s ease;
    &: hover {
        box-shadow: 0 0 20px 5px rgba(201, 83, 174, 0.7);
    }
    display: flex;
    align-items: center;
    background-image: ${props => {
        switch(props.color){
            case "yellow":
                return `url(${Yellow})`;
            case "red":
                return `url(${Red})`;
            case "purple":
                return `url(${Purple})`;
            case "orange":
            default:
                return `url(${Orange})`;
        }
    }};
`
const Title = styled.div `
    height: 81px;
    width: 450px;
    line-height: 81px;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    overflow: hidden;
    font-family: "Caveat", cursive;
    position: absolute;
    top: 70px;
    left: 60px;
    
`
const ByLine = styled.div`
    width: 450px;
    height: 45px;
    color: #F0E8CE;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    position: absolute;
    left: 70px;
    top: 255px;
    
`
const ArticleCard = (props) => {
    return(
        <Container color={props.article_color}>
            <Title>{props.article_title}</Title>
            <ByLine>{props.article_byline}</ByLine>
        </Container>
    )
}

export default ArticleCard;