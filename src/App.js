import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = "white";

let defaultStyle = {
  color: defaultTextColor

};

let fakeServerData = {
  user: {
    name : 'David',
    playlists: [
    {
      name: 'May favs',
      songs: 
      [
        {name: 'aaaaaa', duration: 1111}, 
        {name: 'bbbbbb', duration: 2222},
        {name :'cccccc', duration: 3333}
      ]
    },
    {
      name: 'May favs2',
      songs: 
      [
        {name: 'aaaaaa', duration: 1111}, 
        {name: 'bbbbbb', duration: 2222},
        {name :'cccccc', duration: 3333}
      ]
    },
    {
      name: 'May favs3',
      songs: 
      [
        {name: 'aaaaaa', duration: 1111}, 
        {name: 'bbbbbb', duration: 2222},
        {name :'cccccc', duration: 3333}
      ]
    },
    {
      name: 'May favs3',
      songs: 
      [
        {name: 'aaaaaa', duration: 1111}, 
        {name: 'bbbbbb', duration: 2222},
        {name :'cccccc', duration: 3333}
      ]
    }
  ]
  }
}

class PlaylistCounter extends Component {
  render () {
    return (
      <div style={{width: "40%", display: "inline-block"}}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render () {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0) 
    return (
      <div style={{width: "40%", display: "inline-block"}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div>
        <img/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render () {
    return (
      <div style = {{...defaultStyle, width: "25%", display: "inline-block"}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {serverData: {}}
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }
  render () {
    return (
      <div className='App'>
        {this.state.serverData.user ?
        <div>
          <h1>
            {this.state.serverData.user &&
              this.state.serverData.user.name}'s playlists
          </h1>
          <PlaylistCounter playlists={this.state.serverData.user &&
            this.state.serverData.user.playlists}/>
          <HoursCounter playlists={this.state.serverData.user &&
            this.state.serverData.user.playlists}/>  
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
        </div> : <h1>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
