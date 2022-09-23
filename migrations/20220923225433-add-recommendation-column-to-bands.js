'use strict';
const {Datatypes} = require('sequelize')

module.exports = {
   up:async (queryInterface, Sequelize) => {
    await queryInterface.addColumn ('bands', 'recommendation',{
      type : Datatypes.STRING
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down:async (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
