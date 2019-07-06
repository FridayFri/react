import { connect } from 'react-redux';
import Player from '../components/player/Player';
import { showPlayer } from '../redux/action'

const mapStateToprops = (state) => {
  return {
    showStatus: state.showStatus,
    currentSong: state.song
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    showMusicPlayer:(status) =>{
      dispatch(showPlayer(status))
    }
  }
}
export default connect(mapStateToprops, mapDispatchToProps)(Player)