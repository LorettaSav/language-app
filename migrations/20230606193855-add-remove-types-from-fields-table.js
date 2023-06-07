'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return  queryInterface.alterColumn(
      "Values",
      "wordId"
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      "Fields",
      "type",
      {
        type: Sequelize.STRING
      }
    )
  }
};
