import React from 'react'
import Gif from './Gif'
import {Link} from 'react-router-dom'


class Zoom extends React.Component {
  render(){
    return (
      <div className="container">
        <Link to="/">
          <button className="btn btn-outline-primary">Back</button>
        </Link>
        <div className="row">
          <p className="display-4 text-center" id="title">{this.props.currentGifTitle}</p>
        </div>
        <div className="row">
          <div class="col-md-4"></div>
          <Link to="/">
            <Gif 
              scale={true}
              gifUrl={this.props.currentGifUrl}
              onClick={()=>{}}
            />
          </Link>
        </div>
      </div>
    )
  }
}

export default Zoom