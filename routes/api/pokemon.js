const express = require('express');


const router = express.router();

const { Op } = require('sequelize');

//! /gen/:genNum get all pokemon  from a specific gen
//! only show columns name, gen, order by type reverse alpha

router.get('/gen/:genNum', async (req, res, next) => {

})

//! /type/water get all pokemon that are water type
//! show name, type, hasEvo, order by name alpha

router.get('/type/water', async (req, res, next) => {

})

//! /char
//! get all pokemon that start with Char, show all info
router.get('/char', async (req, res, next) => {

})

//! /:id getting specific pokemon, deleting or updating pokemon
//! show all info
router.route('/:id')
    .get(async (req, res, next) => {

    })
    .put(async (req, res, next) => {

    })
    .delete(async (req, res, next) => {

    })

//! / -> posting a new pokemon, getting all pokemon
//! order by pokemon who can evolve

router.route('/')
    .get(async (req, res, next) => {

    })
    .post(async (req, res, next) => {
        
    })







module.exports = router;
