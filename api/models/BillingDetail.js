const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    class BillingDetail extends Model {};

    BillingDetail.init(
        {
            ID: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },

            ShipmentMethod: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            BillingMethod: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Address: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: "BillingDetail",
            tableName: "billingDetails",
            freezeTableName: true,
            timestamps: false,
        }
    );

    return BillingDetail;
};