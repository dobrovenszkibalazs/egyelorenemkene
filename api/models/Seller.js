const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) =>
{
    class Seller extends Model {};

    Seller.init
    (
        {
            ID:
            {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },

            userId:
            {
                type: DataTypes.UUID,
                allowNull: false,
                unique: true,
            },

            Bio:
            {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },

        {
            sequelize,
            modelName: "Seller",
            tableName: "sellers",
            freezeTableName: true,
            timestamps: false,
        }
    );

    return Seller;
};