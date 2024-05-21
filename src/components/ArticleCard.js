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
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    font-family: "Caveat", cursive;
    position: relative;
    color: #051626;
    top: -4em;
    left: 3em;
`
const ByLine = styled.div`
    color: #F0E8CE;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    position: relative;
    top: 3.1em;
    left: -12em;
`
const ArticleCard = (props) => {
    return(
        <Container color={props.article_color}>
            <Title>Title{props.article_title}</Title>
            <ByLine>BY JOE BRUIN{props.article_byline}</ByLine>
        </Container>
    )
}

export default ArticleCard;