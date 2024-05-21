import styled from 'styled-components'
import left_curve from '../images/left-curve.png'
import playlist_left from '../images/playlist-left.png'
import playlist_right from '../images/playlist-right.png'
import playlist_temp from '../images/playlist-temp.png'

const Container = styled.div`
    margin-top: 20vh;
    position: relative;
    height: 100%;
    width: 100%;
`

const Curve = styled.div`
    position: absolute;
    width: 80%;
    margin-top: -55%;
    img {
        width: 30%;
        float: left;
    }
    @media (max-width: 480px) {
        img {
            width: 40%;
            margin-top: -5vh;
        }
    }
`

const Title = styled.div`
    display: flex;
    margin-top: -20vh;
    justify-content: center;
    position: absolute;
    height: auto;
    width: 100%;
    z-index: 10; /* Increase z-index to bring it in front */
    .image {
        flex-grow: 1;
        width: 100%;
        flex-basis: auto;
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
    z-index: 5; /* Increase z-index to bring it in front */
    padding-bottom: 5vh;
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

const Playlist = ({props}) => {
    return (
        <Container>
            <Curve>
                <img className="curve" src={left_curve} alt="curve" />
            </Curve>
            <Title>
                <img src={playlist_left} className="left" alt="playlist left" />
                <Text>PLAYLIST</Text>
                <img src={playlist_right} className="right" alt="playlist right" />
            </Title>
            <PlaylistContent>
                <img src={playlist_temp} alt="playlist temp" />
            </PlaylistContent>
        </Container>
    )
}

export default Playlist;
