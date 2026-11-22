const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    class Game extends Model {};

    Game.init(
        {
            ID: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },
            IsWinner: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            Prize: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            Name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Cost: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: "Game",
            tableName: "games",
            freezeTableName: true,
            timestamps: true,
        }
    );

    return Game;
};