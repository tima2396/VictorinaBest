const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Total extends Model {
    static associate({ User, Theme }) {
      Total.Users = Total.belongsTo(User, { foreignKey: 'userId' });
      Total.Themes = Total.belongsTo(Theme, { foreignKey: 'idTheme' });
    }
  }
  Total.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },

    score: DataTypes.INTEGER,

    idTheme: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Total',
  });
  return Total;
};
