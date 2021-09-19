// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id"
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id"
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  //Defining the third table that this connection is used in
  through: {
    model: ProductTag,
    unique: false
  },
  //Defining the alias for the linked tables
  as: "tag"
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  //Defining the third table that this connection is used in
  through: {
    model: ProductTag,
    unique: false
  },
  //Defining the alias for the linked tables
  as: "product"
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
