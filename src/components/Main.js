import React from 'react';
import GifList from './GifList'
import InfiniteScroll from 'react-infinite-scroller';
import {Link} from 'react-router-dom';

class Main extends React.Component {
  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <p className="display-4 text-center">Truck GIFS from GIPHY</p>
            <button className="btn btn-outline-primary" onClick={this.props.refresh}>Refresh</button>
          </div>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.props.loadMore}
            hasMore={true || false}
            loader={<div className="loader">Loading ...</div>}>
              <Link to="/zoom">
                <GifList
                gifs={this.props.gifs} 
                onClick={(url,title)=>{this.props.handleViewOneGif(url,title)}}
                />
              </Link>
          </InfiniteScroll>
        </div>  
      </div>
    )
  }
}

export default Main;