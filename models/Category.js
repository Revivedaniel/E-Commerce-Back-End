const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      //making the type of data stored in this column an integer
      type: DataTypes.INTEGER,
      //NOT NULL
      allowNull: false,
      //Making Primary key
      primaryKey: true,
      //Auto incrementing
      autoIncrement: true
    },
    category_name: {
      //making the type of data stored in this column a string
      type: DataTypes.STRING,
      //NOT NULL
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
