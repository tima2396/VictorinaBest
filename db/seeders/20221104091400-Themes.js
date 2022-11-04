/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const themes = [
      { name: 'theme 1' },
      { name: 'theme 2' },
      { name: 'theme 3' },
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
