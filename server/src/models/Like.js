"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Like extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * 
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Like.belongsTo(models.Posts, { foreignKey: 'postId', targetKey: 'id', onUpdate: 'CASCADE', onDelete: 'CASCADE' })
            Like.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id', onUpdate: 'CASCADE', onDelete: 'CASCADE' })
        }
    }
    Like.init(
        {
            // định danh bài đăng
            postId: DataTypes.INTEGER,
            // bài đăng được thích bởi user
            userId: DataTypes.INTEGER,
            //thích hay không thích ?
            status: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "Like",
        }
    )
    return Like
}
