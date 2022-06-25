const User = require('./User');
const Category = require('./Category');
const Comment = require('./Comment');
const Post = require('./post');

Post.belongsTo(Category, {
  foreignKey: 'Post_id',
});

Category.hasMany(Post, {
  foreignKey: 'Post_id',
  onDelete: 'CASCADE',
});

User.hasMany(Post, {
  foreignKey: 'User_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Post, Category, Comment };
