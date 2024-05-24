const express = require('express');
const dotenv = require('dotenv').config({path: '.env'});
const MoviesRoutes = require('./routes/movieRoutes');

app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());
app.use("/api/movies", MoviesRoutes);