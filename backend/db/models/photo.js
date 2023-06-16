const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate(models) {
      this.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }
  Photo.init(
    {
      path: DataTypes.STRING,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Photo',
    },
  );
  return Photo;
};
