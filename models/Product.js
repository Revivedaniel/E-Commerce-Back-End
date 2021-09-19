// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
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
    product_name: {
      //making the type of data stored in this column a string
      type: DataTypes.STRING,
      //NOT NULL
      allowNull: false
    },
    price: {
      //making the type of data stored in this column a decimal number
      type: DataTypes.DECIMAL,
      //NOT NULL
      allowNull: false,
      //Validates that the value is a decimal
      validate: {
        isDecimal: true
      }
    },
    stock: {
      //making the type of data stored in this column an integer
      type: DataTypes.INTEGER,
      //NOT NULL
      allowNull: false,
      //default value set to 10
      defaultValue: 10,
      //validates that the value in numeric
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      //making the type of data stored in this column an integer
      type: DataTypes.INTEGER,
      //references category model's id
      references: {
        model: "category",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
