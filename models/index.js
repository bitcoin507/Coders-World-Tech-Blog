const User = require('./User');
const Category = require('./Category');
const Comment = require('./Comment');
const Post = require('./Post');
const Popular = require('./Popular');

Popular.belongsTo(User, { 
  foreignKey: 'author_id',
  targetKey: 'id' 
  
} );

Popular.belongsTo(Category, {
  foreignKey: 'category_id',
  targetKey: 'id'
} );

Popular.belongsTo(Post, { 
  foreignKey: 'post_id',
  targetKey: 'id'
  } );

Popular.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
  targetKey: 'id'
  
} );

Category.hasMany(Popular, {
  foreignKey: 'category_id',
  sourceKey: 'id'
} );


Post.belongsTo(Category, {
  foreignKey: 'popular_id',
  onDelete: 'CASCADE',
});

Category.hasMany(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

User.hasMany(Popular, {
  foreignKey: 'author_id',
  onDelete: 'CASCADE',
} );

User.hasMany(Post, {
  foreignKey: 'user_id',
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

module.exports = { User, Post, Category, Comment,Popular };
