import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GenreCard from '../GenreCard/GenreCard';
import './Header.css';

function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenres, setSelectedGenres] = useState([]);
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleGenreClick = (genre) => {
        setSelectedGenres((prevGenres) =>
            prevGenres.includes(genre)
                ? prevGenres.filter((g) => g !== genre)
                : [...prevGenres, genre]
        );
    };

    const handleTitleSearch = async () => {
        let url = 'http://localhost:5001/api/movies/title';

        if (searchTerm) {
            url += `?title=${searchTerm}`;
        }
        else{
            return;
        }

        const response = await fetch(url);
        const movies = await response.json();
        navigate('/search', {state: {movies: movies}});
    };

    const handleGenreSearch = async () => {
        let url = 'http://localhost:5001/api/movies/genres';

        if (genres.length > 0) {
            url += `?genres=${selectedGenres.join(',').toLowerCase()}`;
        }
        else{
            return;
        }

        const response = await fetch(url);
        const movies = await response.json();
        navigate('/search', {state: {movies: movies}});
    };

    const genres = [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Family",
        "Fantasy",
        "History",
        "Horror",
        "Music",
        "Mystery",
        "Romance",
        "Science fiction",
        "TV Movie",
        "Thriller",
        "War",
        "Western"
    ];
    

    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                <h1>Movie Explorer</h1>
            </Link>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by movie title..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button onClick={handleTitleSearch}>🔍</button>
            </div>
            <div className="genre-cards">
                {genres.map((genre) => (
                    <GenreCard
                        className="genre-card"
                        key={genre}
                        genre={genre}
                        selected={selectedGenres.includes(genre)}
                        onClick={() => handleGenreClick(genre)}
                    />
                ))}
                <button onClick={handleGenreSearch}>🔍</button>
            </div>
        </nav>
    );
}

export default Header;
