import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{
    // 데이터 타입체크 -> 많은 버그 잡을 수 있음
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }

    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render(){
        return(
            <img src={this.props.poster} />
        )
    }
}

export default Movie;