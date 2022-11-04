/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const themes = [
      { name: 'Про кино' },
      { name: 'Умные вопросы' },
      { name: 'Тупые вопросы за 300' },
    ];
    const data = themes.map((theme) => ({
      ...theme,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Themes', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes');
  },
};
