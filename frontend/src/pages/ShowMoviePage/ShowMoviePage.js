import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShowMoviePage.css';

function ShowMoviePage() {
    const movieId = useParams().id;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/movies/${movieId}`);
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="poster"><img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={`${movie.title} Poster`} /></div>
            <div className="details">
                <h1>{movie.title}</h1>
                <div>{`${movie.release_date} (${movie.origin_country.join(' · ')})`}</div>
                <br/>
                <div><u style={{ fontSize: '1.5em' }}>Genres:</u></div>
                <br/>
                <div style={{ fontSize: '1.0em' }}>{`${movie.genres.join(' · ')}`}</div>

                <div className="overview">
                    <h><b style={{ fontSize: '1.5em' }}><u>Tagline:</u></b></h>
                    <br/>
                    <br/>
                    <i>{`${movie.tagline}`}</i>
                    <br/><br/>
                    <h><b style={{ fontSize: '1.5em' }}><u>Overview:</u></b></h>
                    <br/>
                    <br/>
                    <div className="overview-text" style={{ fontSize: '1.0em' }}>{movie.overview}</div>
                    <br/>
                <div><h><b style={{ fontSize: '1.5em' }}><u>Runtime:</u></b></h> {`${movie.runtime}m`}</div>
                </div>
            </div>
        </div>
    );
}

export default ShowMoviePage;
