const asyncHandler = require('express-async-handler');
const axios = require('axios');

//@desc Genre ID's and their corresponding names
const genreName = {
    "28": "action",
    "12": "adventure",
    "16": "animation",
    "35": "comedy",
    "80": "crime",
    "99": "documentary",
    "18": "drama",
    "10751": "family",
    "14": "fantasy",
    "36": "history",
    "27": "horror",
    "10402": "music",
    "9648": "mystery",
    "10749": "romance",
    "878": "science fiction",
    "10770": "tv movie",
    "53": "thriller",
    "10752": "war",
    "37": "western"
};

//@desc Genre names and their corresponding ID's
const genreId = {
    "action": "28",
    "adventure": "12",
    "animation": "16",
    "comedy": "35",
    "crime": "80",
    "documentary": "99",
    "drama": "18",
    "family": "10751",
    "fantasy": "14",
    "history": "36",
    "horror": "27",
    "music": "10402",
    "mystery": "9648",
    "romance": "10749",
    "science fiction": "878",
    "tv movie": "10770",
    "thriller": "53",
    "war": "10752",
    "western": "37"
};

//@desc Get movies by genre
//@route GET /api/movies/genres?genres=genreId1|genreId2..
//@access Public
const getMoviesByGenre = asyncHandler(async (req, res) => {
    const genre_names = req.query.genres.toLowerCase();
    const genre_ids = genre_names.split(',').map(genre => genreId[genre]).join(',');
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genre_ids}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`
        }
    };

    const response = await axios.get(url, options);
    const result = response.data.results.map(movie => {
        return {
            backdrop_path: movie.backdrop_path,
            poster_path: movie.poster_path,
            id: movie.id,
            title: movie.title,
            release_date: movie.release_date
        };
    });
    res.json(result);
});

//@desc Get movies by title
//@route GET /api/movies/title/:title
//@access Public
const getMoviesByTitle = asyncHandler(async (req, res) => {
    const title = req.query.title.split(' ').join('%20');
    const url = `https://api.themoviedb.org/3/search/movie?query=${title}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjNkOTY5NzAxMTdjNDdmOGMwMjAyY2M4YTU3YzYyOSIsInN1YiI6IjY2NTBjYzAzZDA0ZjE2ZDlhYzM1MTE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l9pivR9Ed0wDVHceebGvJas63i-BX2l89_NO-Rbj_Q8'
        }
    };

    const response = await axios.get(url, options);
    const result = response.data.results.map(movie => {
        return {
            backdrop_path: movie.backdrop_path,
            poster_path: movie.poster_path,
            id: movie.id,
            title: movie.title,
            release_date: movie.release_date
        };
    });
    res.json(result);
});

//@desc Get trending movies
//@route GET /api/movies
//@access Public
const getTrendingMovies = asyncHandler(async (req, res) => {
    const url = 'https://api.themoviedb.org/3/trending/movie/week';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjNkOTY5NzAxMTdjNDdmOGMwMjAyY2M4YTU3YzYyOSIsInN1YiI6IjY2NTBjYzAzZDA0ZjE2ZDlhYzM1MTE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l9pivR9Ed0wDVHceebGvJas63i-BX2l89_NO-Rbj_Q8'
        }
    };

    const response = await axios.get(url, options);
    const result = response.data.results.map(movie => {
        return {
            backdrop_path: movie.backdrop_path,
            poster_path: movie.poster_path,
            id: movie.id,
            title: movie.title,
            release_date: movie.release_date
        };
    });
    res.json(result);
});

//@desc Get movie by ID
//@route GET /api/movies/:id
//@access Public
const getMovieByID = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjNkOTY5NzAxMTdjNDdmOGMwMjAyY2M4YTU3YzYyOSIsInN1YiI6IjY2NTBjYzAzZDA0ZjE2ZDlhYzM1MTE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l9pivR9Ed0wDVHceebGvJas63i-BX2l89_NO-Rbj_Q8'
        }
    };

    const response = await axios.get(url, options);
    const result = {...response.data,
        genres: response.data.genres.map(genre => genre.name),
        spoken_languages: response.data.spoken_languages.map(language => language.name),
    };

    res.json(result);
});

module.exports = { getMoviesByGenre, getMoviesByTitle, getTrendingMovies, getMovieByID };