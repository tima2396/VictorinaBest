const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Total, Question }) {
      Theme.Totals = Theme.hasMany(Total, { foreignKey: 'idTheme' });
      Theme.Questions = Theme.hasMany(Question, { foreignKey: 'idTheme' });
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
