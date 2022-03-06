"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Posts.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id', as: "postUser", onUpdate: 'CASCADE', onDelete: 'CASCADE' })
      Posts.hasMany(models.Like, { foreignKey: 'PostId', as: 'PostLikeCount', onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    }
  }
  Posts.init(
    {
      userId: DataTypes.INTEGER,
      caption: DataTypes.STRING,
      description: DataTypes.STRING,
      song: DataTypes.STRING,
      thumbnail: DataTypes.BLOB,
      url: DataTypes.BLOB,
    },
    {
      sequelize,
      modelName: "Posts",
    }
  )
  return Posts
}
