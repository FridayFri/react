import React from 'react';
import axios from 'axios'
class Instagram extends React.Component{
  render(){
    return(
      <div>
        Instagram
      </div>
    )
  }
  componentDidMount(){
    axios
    .get('/api')
    .then(data=>{
      console.log(data)
    })
  }
}

export default Instagram ;