'use strict';
const { Trainer, Pokemon } = require('../models');
const trainersToPokemon = [
  {
    trainer: 'Alan',
    pokemon: [
      'Squirtle',
      'Froakie',
      'Totodile'
    ]
  },
  {
    trainer: 'Phil',
    pokemon: [
      'Charmander',
      'Chespin',
      'Yanma'
    ]
  },
  {
    trainer: 'Ash',
    pokemon: [
      'Pikachu',
      'Bulbasaur'
    ]
  }
]
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


    for (let i = 0; i < trainersToPokemon.length; i++){
      const el = trainersToPokemon[i];
      const trainer = await Trainer.findOne({
        where: {
          name: el.trainer
        }
      })
      for (let j = 0; j < el.pokemon.length; j++){
        const pokeName = el.pokemon[j];
        const pokemon = await Pokemon.findOne({
          where: {
            name : pokeName
          }
        })
        await trainer.addPokemon(pokemon);
      }
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    for (let i = 0; i < trainersToPokemon.length; i++) {
      const el = trainersToPokemon[i];
      const trainer = await Trainer.findOne({
        where: {
          name: el.trainer
        }
      })
      for (let j = 0; j < el.pokemon.length; j++) {
        const pokeName = el.pokemon[j];
        const pokemon = await Pokemon.findOne({
          where: {
            name: pokeName
          }
        })
        await trainer.removePokemon(pokemon);
      }
    }
  }
};
