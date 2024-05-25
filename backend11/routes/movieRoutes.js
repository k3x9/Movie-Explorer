const express = require('express');
const router = express.Router();
const { getMoviesByGenre, getMoviesByTitle, getTrendingMovies, getMovieByID} = require('../controllers/movieControllers');

router.get('/', getTrendingMovies);
router.get('/genres', getMoviesByGenre);
router.get('/title', getMoviesByTitle);
router.get('/:id', getMovieByID);

module.exports = router;