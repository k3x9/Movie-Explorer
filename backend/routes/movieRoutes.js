const express = require('express');
const router = express.Router();
const { getMoviesByGenre, getMoviesByTitle } = require('../controllers/movieControllers');

router.get('/genre/:genre', getMoviesByGenre);
router.get('/title/:title', getMoviesByTitle);

module.exports = router;