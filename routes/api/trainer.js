const express = require('express');

const { Trainer, Pokemon } = require('../../db/models')

const { buildError } = require('../../utils/errorBuild.js')

const router = express.Router();

const { Op } = require('sequelize');



router.get('/', async (req, res, next) => {
    const trainers = await Trainer.findAll()
    res.json(trainers)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const trainer = await Trainer.findByPk(id);

    res.json(trainer)

})

router.post('/', async (req, res, next) => {
    const { name, homeTown } = req.body;

    const newTrainer = await Trainer.create({ name, homeTown });

    res.json(newTrainer);
})

module.exports = router;
