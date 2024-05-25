import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
    return (
        <Link to={`/movie/${movie.id}`} className="movie-card">
            <div className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={`${movie.title} Poster`} />
                <div className="movie-details">
                    <h3>{movie.title}</h3>
                    <p>Release Date: {movie.release_date}</p>
                </div>
            </div>
        </Link>
    );
}

export default MovieCard;