const asyncHandler = require('express-async-handler');
const axios = require('axios');

//@desc Get movies by genre
//@route GET /api/movies/genre/:genre
//@access Public
const getMoviesByGenre = asyncHandler(async (req, res) => {
    const genre = req.params.genre;
    // https://api.themoviedb.org/3/movie/550?api_key=0b3d96970117c47f8c0202cc8a57c629

    const url = 'https://api.themoviedb.org/3/search/movie?query=war';

    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjNkOTY5NzAxMTdjNDdmOGMwMjAyY2M4YTU3YzYyOSIsInN1YiI6IjY2NTBjYzAzZDA0ZjE2ZDlhYzM1MTE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l9pivR9Ed0wDVHceebGvJas63i-BX2l89_NO-Rbj_Q8'
    }
    };

    const response = await axios.get(url, options);
    res.json(response.data);
});

//@desc Get movies by title
//@route GET /api/movies/title/:title
//@access Public
const getMoviesByTitle = asyncHandler(async (req, res) => {
    res.json({message: 'Movies by title'});
});

module.exports = { getMoviesByGenre, getMoviesByTitle };