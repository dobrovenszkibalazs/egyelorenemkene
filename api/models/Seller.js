const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    class Seller extends Model {};

    Seller.init(
        {
            ID: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },
            UserName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Bio: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            Password: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: "Seller",
            tableName: "seller",
            freezeTableName: true,
            timestamps: false,
        }
    );

    return Seller;
};