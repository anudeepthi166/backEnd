"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let hashedPassword = await bcrypt.hash("adminUser", 5);
    await queryInterface.bulkInsert("Users", [
      {
        email: "admin1@mail.com",
        userName: "admin1",
        password: hashedPassword,
        roleId: 1,
        createdAT: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "admin2@mail.com",
        userName: "admin2",
        password: hashedPassword,
        roleId: 1,
        createdAT: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "admin3@mail.com",
        userName: "admin3",
        password: hashedPassword,
        roleId: 1,
        createdAT: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
