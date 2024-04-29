import styled from 'styled-components'
import Image from '../images/Group10.png'

const Container = styled.div`
    background-color: #051626;
    background-image: url(${Image});
    height: 500px;
    width: 800px;
    transition: box-shadow 0.3s ease;
    &: hover {
        box-shadow: 0 0 20px 5px rgba(201, 83, 174, 0.7);
    }
    display: flex;
    align-items: center;
`
const Title = styled.div `
    width: 450px;
    height: 81px;
    font-weight: 400;
    font-size: 24px;
    font-color: white;
`
const ByLine = styled.div`
    width: 450px;
    height: 45px;
    font-color: #F0E8CE;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 16px;
`
const ArticleCard = () => {
    return(
        <Container>
            <Title>This is a really long article title.</Title>
            <ByLine>BY JOE BRUIN </ByLine>
        </Container>
    )
}

export default ArticleCard;