import React from 'react';
import './GenreCard.css';

function GenreCard({ genre, selected, onClick }) {
    return (
        <div
            className={`genre-card ${selected ? 'selected' : ''}`}
            onClick={onClick}
        >
            {genre}
        </div>
    );
}

export default GenreCard;
