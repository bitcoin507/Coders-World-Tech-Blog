const User = require('./User');
const Blog = require('./Blog');
const Category = require('./Category.js');
const Comment = require('./comment.js')

Blog.belongsTo(this.Category, {
  foreignKey: 'blog_id',
});

User.hasMany(Blog, {
  foreignKey: 'User_id',
  onDelete: 'CASCADE',
});

Blog.hasMany(Comment, {
  foreignKey: 'User_id',
  onDelete: 'CASCADE',
});

User.hasMany(Comment, {
  foreignKey: 'User_id',
  onDelete: 'CASCADE',
});

Blog.belongsTo(User, {  
  foreignKey: 'user_id',u});

module.exports = { User, Blog, Category };
