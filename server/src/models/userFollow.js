"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class UserFollow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserFollow.belongsTo(models.User, { foreignKey: 'authorId', onUpdate: 'CASCADE', onDelete: 'CASCADE' })
      UserFollow.belongsTo(models.User, { foreignKey: 'followerId', onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    }
  }
  UserFollow.init(
    {
      //userId của A 
      authorId: DataTypes.INTEGER,
      //follow userId của B
      followerId: DataTypes.INTEGER,
      // unfollow -> false || followed -> true
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "UserFollow",
    }
  )
  return UserFollow
}