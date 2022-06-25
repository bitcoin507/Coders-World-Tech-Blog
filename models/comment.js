const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'blog',
        key: 'id',
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;