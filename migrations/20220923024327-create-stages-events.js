'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stages_events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stages_events_id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
    
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stages_events');
  }
};