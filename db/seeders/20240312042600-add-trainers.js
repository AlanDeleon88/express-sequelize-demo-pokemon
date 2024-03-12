'use strict';
const { Trainer, Pokemon } = require('../models');
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
    const trainers = [
      {
        name: 'Alan',
        homeTown: 'Little Root Town',
      },
      {
        name: 'Phil',
        homeTown: 'Pewter City'
      },
      {
        name: 'Ash',
        homeTown: 'Pallet Town'
      }
    ]


    await Trainer.bulkCreate(trainers, {validate: true})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const { Op } = require('sequelize');
    await queryInterface.bulkDelete('Trainers', {
      name : { [Op.in]: ['Alan', 'Phil', 'Ash'] }
    }, {})
  }
};
