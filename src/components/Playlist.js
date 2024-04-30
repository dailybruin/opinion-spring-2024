import styled from 'styled-components'
import left_curve from '../images/left-curve.png'
import playlist_left from '../images/playlist-left.png'
import playlist_right from '../images/playlist-right.png'
import playlist_temp from '../images/playlist-temp.png'

const Container = styled.div`
position: relative;
height: 2000px;
`
const Curve = styled.div`
height: 100pt;
width: 15px;
img {
    width: 10%;    /* Set the width of the image to 10% of the Curve container */
    height: 50%;   /* Set the height of the image to 50% of the Curve container */
    object-fit: contain; /* Ensures the content of the image is scaled correctly */
}
`

const Title = styled.div`
display: flex;
justify-content: center;
position: absolute;
top: 780px;
`
const Text = styled.div`
color: #F0E8CE;
margin-top: 30px;
font-family: "Poppins", sans-serif;
font-weight: 600;
font-size: 64px;
`

const Playlist_content = styled.div`
position: absolute;
top: 1000px;
width: 100%;
display: flex;
justify-content: center;
`
const Playlist = () => {
    return (
        <Container>
        <Curve>
        <img class="curve" src={left_curve} />
        </Curve>
        <Title>
            <img src={playlist_left}/>
            <Text>
                PLAYLIST
            </Text>
            <img src={playlist_right}/>
        </Title>
        <Playlist_content>
            <img src={playlist_temp}/>
        </Playlist_content>
        </Container>

    )
  }
  
  export default Playlist;