const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const runQuery = require('./functions/runQuery');
const PORT = 3000;


app.get('/', (req, res, next) => {
    return res.status(200).send('Hello');
});

const schema = `{
    name: String,
    rotation_period: Number,
    orbital_period: Number,
    diameter: Number,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    population: Number
  }`;

runQuery('find({})', 'schemaName', schema, 5);


app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });