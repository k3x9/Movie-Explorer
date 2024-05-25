const express = require('express');
const dotenv = require('dotenv').config({path: '.env'});
const MoviesRoutes = require('./routes/movieRoutes');
const cors = require('cors');

app = express();

const PORT = process.env.PORT || 5000;

const corsOptions = {
    credentials: true,
    origin: ['https://movie-explorer-rho-lac.vercel.app/']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/movies", MoviesRoutes);
app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});