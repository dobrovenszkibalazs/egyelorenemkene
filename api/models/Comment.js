const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    class Comment extends Model {};

    Comment.init(
        {
            ID:{
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },
            Text:{
                type: DataTypes.TEXT,
                allowNull: false,
            },
            Rating:{
                type: DataTypes.DECIMAL,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: "Comment",
            tableName: "comment",
            freezeTableName: true,
            timestamps: true,
        }
    );

    return Comment
};