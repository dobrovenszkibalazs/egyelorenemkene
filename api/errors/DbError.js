const AppError = require("./AppError");

class DbError extends AppError
{
    constructor(message = "The following request cannot be made for the database, unknown error.", options = {})
    {
        super(message, { isOperational: true, ...options, status: 409});
    }
}

module.exports = DbError;