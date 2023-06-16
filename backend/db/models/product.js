const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.hasMany(models.Photo, { foreignKey: 'productId' });
    }
  }
  Product.init(
    {
      productName: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.STRING,
      size: DataTypes.STRING,
      color: DataTypes.STRING,
      category: DataTypes.STRING,
      brand: DataTypes.STRING,
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
    },
  );
  return Product;
};
