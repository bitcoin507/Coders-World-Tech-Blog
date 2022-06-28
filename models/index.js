const User = require('./User');
const Category = require('./Category');
const Post = require('./Post');

Category.hasMany(Post, {
  foreignKey: 'category_id',
  sourceKey: 'id'
});

Post.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});









module.exports = { User, Post, Category };
