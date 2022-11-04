/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const users = [
      { login: 'User', password: '123123123' },
    ];

    const data = users.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Users', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
