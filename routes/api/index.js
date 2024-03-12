const express = require('express');


const router = express.Router();

const pokemonRouter = require('./pokemon.js')
const trainerRouter = require('./trainer.js')

router.use('/pokemon', pokemonRouter);
router.use('/trainers', trainerRouter)

module.exports = router;
