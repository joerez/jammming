import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{name: 'name', artist: 'artist', album: 'album'}, {name: 'name', artist: 'artist', album: 'album'}]
    }
  }

  render() {



    return (
      <div className="App">
      <div>
<h1>Ja<span className="highlight">mmm</span>ing</h1>
<div className="App">
  <SearchBar />
  <div className="App-playlist">
    <SearchResults SearchResults={this.state.SearchResults}/>
  <Playlist />
  </div>
</div>
</div>
      </div>
    );
  }
}

export default App;
