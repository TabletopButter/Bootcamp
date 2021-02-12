import React, {Component} from 'react';
import './App.css';


class App extends Component {
  
  constructor(props) {
    super(props)
    
    const movies = [
      {id: 0, poster_src: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", title: "Avengers: Infinity War", overview: "The Avengers fight Thanos."},
       {id: 1, poster_src: "https://image.tmdb.org/t/p/w185/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg", title: "The Avengers", overview: "The Avengers fight Loki."}
    ]
    
    var movieRows=[];
    movies.forEach((movie) => {
      const movieRow = <div key={movie.id}>
       <img alt="poster" src={movie.poster_src}></img>
       {movie.title} 
      </div>
      movieRows.push(movieRow);
    })
    

    this.state = { 
      rows:[]
    };
  }
  
  performSearch(searchTerm) {
    
    const url=`https://api.themoviedb.org/3/search/movie?api_key=2fa1189625f56e9fe64f1ef5c5c8b681&query=${searchTerm}`;
    
    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(searchResults => {
      
      let movies = searchResults.results;
      var movieRows=[];
      
      movies.forEach((movie) => {
        const movieRow = 
        <div key={movie.id}>
         <h2>{movie.title}</h2>
         <img alt="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
         <p>{movie.overview}</p>
         <h5>{movie.vote_average} out of 10</h5>
         <hr/> 
        </div>
        movieRows.push(movieRow);
      })
      this.setState({rows:movieRows})
    })
    .catch(error=> {
      console.error('Error coming from API: ',error)
    })
  }

  searchChangeHandler = (event) => {
    this.performSearch(event.target.value);
  }


  render(){
   
    return(
      
      <div>
        <h1>Movie Search</h1>
        <input id="inputField" type="text" onChange={this.searchChangeHandler} placeholder="Enter your movie"></input>
        <hr/>
        {this.state.rows}
      </div>
    )
  }
}



export default App;
