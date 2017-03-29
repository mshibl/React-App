import React, { Component } from 'react';
import './App.css';

const MOCKED_MOVIES_DATA = [
  {title: 'Titanic', year: '1997', posters: {thumbnail: 'https://goo.gl/d5N2WO'}},
  {title: 'The Mask', year: '1994', posters: {thumbnail: 'https://goo.gl/6FIKSO'}},
  {title: 'The Matrix', year: '1999', posters: {thumbnail: 'https://goo.gl/1A3l7P'}},
  {title: 'Independence Day', year: '1996'},
  {title: '', year: '', posters: {thumbnail: ''}}
];

const Movie = (movie) => {
  if(movie.title.length > 0){
    return <div>
      <h3>{movie.title} - {movie.year}</h3>
      <img alt="movie" src={movie.posters.thumbnail} />
    </div>  
  } else {
    return ""
  }
}

class App extends Component {
  render() {
    return (

        <div className="App-Header">
          <h1>90s Movies!</h1>
        </div>
        <div className="Movies">
          {MOCKED_MOVIES_DATA.map(movie => {
            return <Movie {...movie}/>
          })}
        </div>
      
    );
  }
}

export default App;
