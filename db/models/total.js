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
    static associate({ User }) {
      Total.User = Total.belongsTo(User, { foreignKey: 'userId' });
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
    idTheme: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Total',
  });
  return Total;
};
