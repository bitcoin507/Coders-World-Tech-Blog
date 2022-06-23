const User = require('./User');
const Blog = require('./Blog');
const Category = require('./Category');
const Comment = require('./Comment')

Blog.belongsTo(Category, {
  foreignKey: 'blog_id',
});

Category.hasMany(Blog, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});

User.hasMany(Blog, {
  foreignKey: 'User_id',
  onDelete: 'CASCADE',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id', u
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Blog, Category };
