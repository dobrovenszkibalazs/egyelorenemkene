const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    class Buyer extends Model {};

    Buyer.init(
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
            Password: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: "Buyer",
            tableName: "buyer",
            freezeTableName: true,
            timestamps: false,
        }
    );

    return Buyer;
};