import styled from 'styled-components'
import left_curve from '../images/left-curve.png'
import right_curve from '../images/right-curve.png'
import playlist_left from '../images/playlist-left.png'
import playlist_right from '../images/playlist-right.png'

const Container = styled.div`
    margin-top: 20vh;
    position: relative;
    height: 100%;
    width: 100%;
`

const CurveLeft = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: -40%;
    z-index: 1; /* Ensure this is lower than PlaylistContent */
    img {
        position: absolute;
        width: 30%;
        left: 0;
        top: 0;
    }
    @media (max-width: 480px) {
        img {
            width: 30%;
            margin-top: 10%;
        }
    }
`

const CurveRight = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 1; /* Ensure this is lower than PlaylistContent */
    margin-top: 35%;
    img {
        position: absolute;
        width: 25%;
        right: 0;
        top: 0;
    }
    @media (max-width: 480px) {
        img {
            width: 30%;
            margin-top: 35%;
        }
    }
`

const Title = styled.div`
    display: flex;
    margin-top: -20vh;
    justify-content: center;
    position: relative;
    height: auto;
    width: 100%;
    z-index: 10; /* Ensure this is lower than PlaylistContent */
    img {
        display: block;
        width: 100%;
        
        max-width: 100%;
        object-fit: contain;
        overflow: hidden;
    }
`

const Text = styled.div`
    line-height: 96px;
    flex-grow: 1;
    color: #F0E8CE;
    margin-top: 3.5vh;
    font-family: 'Poppins';
    font-size: 4.4vw;
    font-weight: 600;

    @media (max-width: 480px) {
        font-size: 6vw;
    }
`

const PlaylistContent = styled.div`
    position: relative;
    z-index: 20; /* Ensure this is higher than CurveRight */
    padding-bottom: 5%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    img {
        width: 60%;
    }

    @media (max-width: 768px) {
        img {
            width: 70%;
        }
    }

    @media (max-width: 480px) {
        img {
            width: 80%;
        }
    }
`

const Playlist = (props) => {
    const image = props.playlist_img
    return (
        <Container>
            <CurveLeft>
                <img className="curve" src={left_curve} alt="curve" />
            </CurveLeft>
            <CurveRight>
                <img className="curve" src={right_curve} alt="curve" />
            </CurveRight>
            <Title>
                <img src={playlist_left} className="left" alt="playlist left" />
                <Text>PLAYLIST</Text>
                <img src={playlist_right} className="right" alt="playlist right" />
            </Title>
            <PlaylistContent>
                <img src={image} alt="playlist content" />
            </PlaylistContent>
        </Container>
    )
}

export default Playlist;
