const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Total extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Theme }) {
      Total.User = Total.belongsTo(User, { foreignKey: 'userId' });
      Total.Theme = Total.belongsTo(Theme, { foreignKey: 'idTheme' });
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
