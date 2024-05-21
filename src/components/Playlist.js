import styled from 'styled-components'
import left_curve from '../images/left-curve.png'
import playlist_left from '../images/playlist-left.png'
import playlist_right from '../images/playlist-right.png'
import playlist_temp from '../images/playlist-temp.png'

const Container = styled.div`
margin-top: -300pt;
position: relative;
height: 1500px;
width: 100%;
`
const Curve = styled.div`
float: left;
position: absolute;
width: 100%;
img {
    width: 25%;
    float: left;
}
`

const Title = styled.div`
display: flex;
justify-content: center;
position: absolute;
width: 100%;
top: 500px;
`
const Text = styled.div`
color: #F0E8CE;
margin-top: 30px;
font-family: "Poppins", sans-serif;
font-weight: 600;
font-size: 4.4vw;
`

const Playlist_content = styled.div`
position: absolute;
top: 700px;
width: 100%;
display: flex;
justify-content: center;
img {
    width: 60%;
}
`
const Playlist = () => {
    return (
        <Container>
        <Curve>
        <img class="curve" src={left_curve} />
        </Curve>
        <Title>
            <img src={playlist_left} class="left"/>
            <Text>
                PLAYLIST
            </Text>
            <img src={playlist_right} class="right"/>
        </Title>
        <Playlist_content>
            <img src={playlist_temp}/>
        </Playlist_content>
        </Container>

    )
  }
  
  export default Playlist;