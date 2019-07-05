import React, { Component } from 'react';
import './play.styl'

class Player extends Component {
  state = {  }
  render() { 
    console.log('player props',this.props)
    return ( 
      <div className="player">
        player
      </div>
     );
  }
}

export default Player;