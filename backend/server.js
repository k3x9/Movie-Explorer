const express = require('express');
const dotenv = require('dotenv').config({path: '.env'});
const MoviesRoutes = require('./routes/movieRoutes');
const cors = require('cors');

app = express();

const PORT = process.env.PORT || 5000;

const corsOptions = {
    credentials: true,
    origin: ['*']
};

app.use(cors(corsOptions));
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());
app.use("/api/movies", MoviesRoutes);
app.get('/', (req, res) => {
    res.send('API is running');
});