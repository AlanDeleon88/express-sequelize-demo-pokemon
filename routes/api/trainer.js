const express = require('express');

const { Trainer, Pokemon } = require('../../db/models')

const { buildError } = require('../../utils/errorBuild.js')

const router = express.Router();

const { Op } = require('sequelize');


router.get('/', async (req, res, next) => {

    res.json('test')
})

module.exports = router;
