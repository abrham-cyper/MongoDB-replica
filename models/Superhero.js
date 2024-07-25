// models/Superhero.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const superheroSchema = new Schema({
    name: { type: String, required: true },
    superpower: { type: String, required: true },
    universe: { type: String, required: true }
});

const Superhero = mongoose.model('Superhero', superheroSchema);

module.exports = Superhero;
