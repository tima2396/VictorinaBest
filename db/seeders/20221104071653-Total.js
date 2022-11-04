/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const totals = [
      { userId: 1, score: 30, idTheme: 1 },
      { userId: 1, score: 24, idTheme: 2 },
      { userId: 1, score: 33, idTheme: 1 },
      { userId: 1, score: 45, idTheme: 3 },
    ];
    const data = totals.map((total) => ({
      ...total,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Totals', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Totals');
  },
};
