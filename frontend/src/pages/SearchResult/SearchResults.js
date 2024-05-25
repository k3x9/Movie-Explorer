import React from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import './SearchResults.css';

function SearchResults() {
    const location = useLocation();
    const movies = location.state?.movies || [];

    return (
        <div className="search-results">
            <h2>Search Results</h2>
            {movies.length > 0 ? (
                <MovieList movies={movies} />
            ) : (
                <div className="nothing-found">Nothing found</div>
            )}
        </div>
    );
}

export default SearchResults;
