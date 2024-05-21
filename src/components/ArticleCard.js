import styled from 'styled-components';
import Orange from '../images/orange-cassette.png';
import Yellow from '../images/yellow-cassette.png';
import Red from '../images/red-cassette.png';
import Purple from '../images/purple-cassette.png';

const Container = styled.div`
    margin: 1.5%;
    background-color: #051626;
    width: 50vw;
    height: 30vw;
    max-width: 568.61px;
    max-height: 348.46px;
    transition: box-shadow 0.3s ease;
    &:hover {
        box-shadow: 0 0 20px 5px rgba(201, 83, 174, 0.7);
    }
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-image: ${props => {
        switch(props.color) {
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
    background-size: cover;
    background-position: center;
`;

const Title = styled.div`
    width: 80%;
    font-weight: 400;
    font-size: 2vw;
    text-align: center;
    font-family: "Caveat", cursive;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #051626;

    @media (max-width: 768px) {
        font-size: 5vw;
    }
`;

const ByLine = styled.div`
    width: 80%;
    color: #F0E8CE;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 1.5vw;
    text-align: center;
    position: absolute;
    bottom: 36%;
    left: 50%;
    transform: translate(-50%, 50%);

    @media (max-width: 768px) {
        font-size: 2.5vw;
    }
`;

const ArticleCard = ({props}) => {
    return (
        <Container color={props.article_color}>
            <Title>{props.article_title}</Title>
            <ByLine>{props.article_byline}</ByLine>
        </Container>
    );
};

export default ArticleCard;
