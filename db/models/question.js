const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme }) {
      Question.Theme = Question.belongsTo(Theme, { foreignKey: 'idTheme' });
    }
  }
  Question.init({
    idTheme: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
        key: 'id',
      },
    },
    question: DataTypes.TEXT,
    answer: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
