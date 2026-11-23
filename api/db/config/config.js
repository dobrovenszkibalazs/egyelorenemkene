const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } = process.env || {};

const options =
{
    migrationStorageTableName: "migrations",
    seederStorage: "sequelize",
    seederStorageTableName: "seeders",
};

const Config =
{
    username: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    dialect: DB_DIALECT,
    ...options,
};

const dConfig =
{
    ...Config,
    database: `${DB_NAME}_dev`,
};

module.exports =
{
    production:
    {
        ...Config,
        database: DB_NAME,
    },
    dev: dConfig,
    test:
    {
        ...Config,
        database: `${DB_NAME}_test`,
    },
};