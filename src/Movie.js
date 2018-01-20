import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

// * Stateless Fuctional Component(Dumb)
function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='2'
                        ellipsis=' ...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

function MovieGenre(genre){
    return(
        <span className="Movie__Genre">{genre.genre}</span> //genre is Object {genre:romance}
    )
}


// * propTypes Check! -> can find bugs
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
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