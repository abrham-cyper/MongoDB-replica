const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017,localhost:27018,localhost:27019/moviesDB?replicaSet=myReplicaSet';

mongoose.connect(dbURI)
  .then(() => console.log('Connected to the MongoDB replica set'))
  .catch((err) => console.error('Error connecting to MongoDB replica set:', err));

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  year: { type: Number, required: true }
});

const Movie = mongoose.model('Movie', movieSchema);

async function addMovie() {
  const newMovie = new Movie({
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010
  });

  try {
    const savedMovie = await newMovie.save();
    console.log('Movie added:', savedMovie);
  } catch (err) {
    console.error('Error adding movie:', err);
  }
}

async function getAllMovies() {
  try {
    const movies = await Movie.find();
    console.log('All Movies:', movies);
  } catch (err) {
    console.error('Error fetching movies:', err);
  }
}

async function main() {
  await addMovie();
  await getAllMovies();
  mongoose.connection.close();
}

main();
