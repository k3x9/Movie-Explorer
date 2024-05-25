import React, { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import './Home.css';

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('http://localhost:5001/api/movies/');
            const data = await response.json();
            setMovies(data);
        };

        fetchMovies();
    }, []);

    return (
        <div className="home">
            <h2>Trending</h2>
            <MovieList movies={movies} />
        </div>
    );
}

export default Home;
