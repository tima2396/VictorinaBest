/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const questions = [
      { idTheme: 1, question: 'where?', answer: 'here' },
      { idTheme: 1, question: 'who?', answer: 'he' },
      { idTheme: 1, question: 'me?', answer: 'no' },
      { idTheme: 2, question: 'yes?', answer: 'yep' },
      { idTheme: 2, question: '155?', answer: '156' },
      { idTheme: 2, question: 'wolf?', answer: 'fox' },
      { idTheme: 3, question: 'rabit?', answer: 'wolf' },
      { idTheme: 3, question: 'kit?', answer: 'kot' },
      { idTheme: 3, question: 'twiks?', answer: 'pouse' },
    ];
    const data = questions.map((quest) => ({
      ...quest,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Questions', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions');
  },
};
