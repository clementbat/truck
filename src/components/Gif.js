import React from 'react';

const scaled = {
  transform: 'scale(2)',
  marginTop:'150px'
}

class Gif extends React.Component {
  render() {
    var scale;
    if(this.props.scale){
      scale = scaled;
    }
    return(
        <div className="col-md-3" id="mainView">
          <img
          style={scale}
          src={this.props.gifUrl}  
          alt={this.props.gifUrl}
          title={this.props.gifTitle}
          onClick={()=>{this.props.onClick(this.props.gifUrl,this.props.gifTitle)}}/>
        </div>
      )
  }
}

export default Gif;