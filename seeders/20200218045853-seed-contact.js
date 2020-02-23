"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Contacts", [
      {
        firstname: "Carlos",
        lastname: "Luran",
        phone: "1234567",
        email: "test@test.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstname: "Maria",
        lastname: "Lalalan",
        phone: "",
        email: "mati@test1.com",
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
