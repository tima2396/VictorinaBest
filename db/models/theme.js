const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Total, Question }) {
      Theme.Total = Theme.hasMany(Total, { foreignKey: 'idTheme' });
      Theme.Question = Theme.hasMany(Question, { foreignKey: 'idTheme' });
    }
  }
  Theme.init({
    name: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};
