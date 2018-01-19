import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// * Stateless Fuctional Component(Dumb)
function Movie({title, poster}){
    return(
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}

function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster" />
    )
}

// * propTypes Check! 
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}


// * State Functional Component (Smart)
// class Movie extends Component {
//     // 데이터 타입체크 -> 많은 버그 잡을 수 있음
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster} />
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }
// class MoviePoster extends Component{

//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }

//     render(){
//         return(
//             <img src={this.props.poster} alt={this.props.title}/>
//         )
//     }
// }

export default Movie;