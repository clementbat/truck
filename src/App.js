import React from 'react';
import {Route} from 'react-router-dom';
import Main from './components/Main'
import Zoom from './components/Zoom'

const my_api_key = '83ff6Kex0v8W7uZEE0Dx5eZK85kmwsBQ';
var numberOfGifs = 40;
const url = "https://api.giphy.com/v1/gifs/search?q=truck&sort=recent&api_key="+my_api_key+"&limit="

function setNbGifs(url, numberOfGifs){
  return url+numberOfGifs
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleViewOneGif = this.handleViewOneGif.bind(this);
    this.refresh = this.refresh.bind(this);
    this.loadMore = this.loadMore.bind(this);
    
    
    this.state = {gifs: []};
    this.currentGifUrl = '';
    this.currentGifTitle = '';
  }

  handleViewOneGif(url,title) {
    this.currentGifUrl = url
    this.currentGifTitle = title
  }

  apiCall(url) {
    fetch(url).then((data)=>data.json())
    .then((parsedData)=>{
        var arr = parsedData.data.map((x)=>{
          return {'url':x.images.fixed_width.url.replace(/media\d{1}/,'i'),
            'title':x.title
          }
        })
        this.setState({gifs: arr})
      }
    ).catch((e)=>{console.log(e)});
  }

  componentDidMount() {
    this.apiCall(setNbGifs(url,numberOfGifs))
  }

  refresh(){
    this.apiCall(setNbGifs(url,numberOfGifs))
  }

  loadMore(){
    numberOfGifs += 12
    this.apiCall(setNbGifs(url,numberOfGifs))
  }

  render(){
    var view =
    <div>
    <Route exact path="/" render={()=><Main  
      refresh={this.refresh}
      loadMore={this.loadMore}
      handleViewOneGif={(url,title)=>this.handleViewOneGif(url,title)}
      gifs={this.state.gifs}/>
    }/>
    <Route path="/zoom" render={()=><Zoom
      currentGifTitle={this.currentGifTitle}
      currentGifUrl={this.currentGifUrl}
      />
    }/>
    </div>

    return (
      view
    )
  }
}

export default App;
