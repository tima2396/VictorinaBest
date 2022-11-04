/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const questions = [
      { idTheme: 1, question: 'В каком фильме снялся Дональд Трамп?', answer: 'один дома 2' },
      { idTheme: 1, question: 'За какое время перед нами проходят 24 кадра кинопленки?', answer: '1 секунда' },
      { idTheme: 1, question: 'В скольких номинациях получил «Оскара» фильм «Титаник»?', answer: 'в 11' },
      { idTheme: 2, question: 'Что означает термин “пиано”?', answer: 'В мягком темпе' },
      { idTheme: 2, question: 'Как называется маленький пластмассовый кусочек на конце шнурка?', answer: 'Аглет' },
      { idTheme: 2, question: 'Сколько длится мгновение?', answer: '90 секунд' },
      { idTheme: 3, question: 'Почему змеи высовывают язык?', answer: 'Чтобы «понюхать» воздух' },
      { idTheme: 3, question: 'Растение, знающее практически каждого.', answer: 'хрен' },
      { idTheme: 3, question: 'Сами не горят, а их гасить все равно приходится.', answer: 'долги' },
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
