"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.UserFollow, { foreignKey: "authorId", as: "userFollow", onUpdate: 'CASCADE', onDelete: 'CASCADE' })
      User.hasMany(models.UserFollow, { foreignKey: "followerId", as: "followUser", onUpdate: 'CASCADE', onDelete: 'CASCADE' })
      User.hasMany(models.Posts, { foreignKey: "userId", as: "UserPost", onUpdate: 'CASCADE', onDelete: 'CASCADE' })
      User.hasMany(models.Like, { foreignKey: '', as: "userLike", onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
      avatar: DataTypes.BLOB,
      status: DataTypes.BOOLEAN,
    },
    {
      freezeTableName: true,
      sequelize,
      modelName: "User",
    }
  )
  return User
}
