"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Contacts", [
      {
        firstname: "Carlos",
        lastname: "Hidalgo",
        phone: "1234567",
        email: "test@test.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstname: "Alfonso",
        lastname: "Arbizu",
        phone: "89101123",
        email: "test@test1.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
