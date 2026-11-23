module.exports = (sequelize) => {
    const User = require("./User")(sequelize);
    const BillingDetail = require("./BillingDetail")(sequelize);
    const Buyer = require("./Buyer")(sequelize);
    const Comment = require("./Comment")(sequelize);
    const Game = require("./Game")(sequelize);
    const Order = require("./Order")(sequelize);
    const Product = require("./Product")(sequelize);
    const Seller = require("./Seller")(sequelize);

    User.hasOne(Buyer, {
        foreignKey: { name: "userId", allowNull: false, unique: true },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });
    Buyer.belongsTo(User, {
        foreignKey: { name: "userId", allowNull: false, unique: true },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });

    User.hasOne(Seller, {
        foreignKey: { name: "userId", allowNull: false, unique: true },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });
    Seller.belongsTo(User, {
        foreignKey: { name: "userId", allowNull: false, unique: true },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });

    Order.belongsToMany(Product, {
        through: "order_products",
        foreignKey: { name: "orderId" },
        otherKey: { name: "productId" },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });
    Product.belongsToMany(Order, {
        through: "order_products",
        foreignKey: { name: "productId" },
        otherKey: { name: "orderId" },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });

    Seller.hasMany(Product, {
        foreignKey: { name: "sellerId", allowNull: false },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });
    Product.belongsTo(Seller, {
        foreignKey: { name: "sellerId", allowNull: false },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });

    Seller.hasMany(Comment, {
        foreignKey: { name: "sellerId", allowNull: false },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });
    Comment.belongsTo(Seller, {
        foreignKey: { name: "sellerId", allowNull: false },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });

    Buyer.hasMany(Comment, {
        foreignKey: { name: "buyerId", allowNull: false },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });
    Comment.belongsTo(Buyer, {
        foreignKey: { name: "buyerId", allowNull: false },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });

    Buyer.hasMany(Order, {
        foreignKey: { name: "buyerId", allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    });
    Order.belongsTo(Buyer, {
        foreignKey: { name: "buyerId", allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    });

    Buyer.hasMany(Game, {
        foreignKey: { name: "buyerId", allowNull: false },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });
    Game.belongsTo(Buyer, {
        foreignKey: { name: "buyerId", allowNull: false },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });

    Order.hasOne(BillingDetail, {
        foreignKey: { name: "orderId", allowNull: false, unique: true },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });
    BillingDetail.belongsTo(Order, {
        foreignKey: { name: "orderId", allowNull: false, unique: true },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });

    return {
        User,
        BillingDetail,
        Buyer,
        Comment,
        Game,
        Order,
        Product,
        Seller,
    };
};