import React from 'react';
import Gif from './Gif'

class GifList extends React.Component {
  render() {
    return (  
        <div className="row vertical-align">
          {this.props.gifs.map(gif => (
            <Gif key={gif.url} gifUrl={gif.url} gifTitle={gif.title} onClick={(url,title)=>{this.props.onClick(url,title)}}/>
          ))}
        </div>
    )
  }
}

export default GifList