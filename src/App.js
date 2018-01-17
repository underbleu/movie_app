import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrics",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg"
  },
  {
    title: "Lion Kings",
    poster: "https://images-na.ssl-images-amazon.com/images/I/41kSXzSlnJL.jpg"
  },
  {
    title: "Oldboy",
    poster: "http://2.bp.blogspot.com/-mFKmi1qP_W0/U2V1vWfq3JI/AAAAAAAAKuk/Ivhy1M2jJdI/s1600/OLDBOY+-+South+Korean+Poster+4.jpg"
  },
  {
    title: "Star Wars",
    poster: "http://starwarsblog.starwars.com/wp-content/uploads/2017/10/the-last-jedi-theatrical-blog.jpg"
  }
]

class App extends Component {
  render() {
    return (  
      <div className = "App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;