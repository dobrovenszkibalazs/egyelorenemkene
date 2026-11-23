const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) =>
{
    class Buyer extends Model {};

    Buyer.init
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
        },

        {
            sequelize,
            modelName: "Buyer",
            tableName: "buyers",
            freezeTableName: true,
            timestamps: false,
        }
    );

    return Buyer;
};