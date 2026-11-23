const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) =>
{
    class User extends Model {};

    User.init
    (
        {
            ID:
            {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },

            userName:
            {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate:{
                    notEmpty: true,
                },
            },

            password:
            {
                type: DataTypes.STRING,
                allowNull: false,
                validate:{
                    notEmpty:true,
                },
            },

            role:
            {
                type: DataTypes.STRING, 
                allowNull: false,
                defaultValue: "buyer",
            },
            registeredAt:
            {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },

        {
            sequelize,
            modelName: "User",
            tableName: "users",
            freezeTableName: true,
            timestamps: false,
        }
    );

    return User;
};