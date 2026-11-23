const DbError = require("../errors/DbError");

class UserRepository
{
    constructor(model)
    {
        this.model = model;
    }

    async getUsers({ where = {} } = {})
    {
        try
        {
            return await this.model.findAll(
            {
                attributes:
                {
                    exclude: [ "ID", "password" ],
                },

                where,
            });
        }
        catch(error)
        {
            console.error(error);
        }
    }

    async getUser({ username })
    {
        try
        {
            return await this.model.findOne(
            {
                attributes:
                {
                    exclude: [ "ID", "password" ],
                },

                where: { username },
            });
        }
        catch(error)
        {
            console.error(error);
        }
    }

    async createUser({ userInfo })
    {
        try
        {
            return await this.model.create(userInfo);
        }
        catch(error)
        {
            throw new DbError("Failed to create database entry.", {
                data:userInfo,
                cause: error,
            });
        }
    }

    async updateUser({ username, userInfo })
    {
        try
        {
            const af = await this.model.update(userInfo,
            {
                where: { username },
            });
            if(af === 0) {
                 return { af, upd: null };
            }
            const upd = await this.getUser({ username });
            return { af, upd };
        }
        catch(error)
        {
            throw new DbError("Failed to update database entry.", {
                data:userInfo,
                cause: error,
            });
        }
    }

    async deleteUser({ username })
    {
        try
        {
            const where = { username };
            const d = await this.getUsers({ where });
            const af = await this.model.destroy(
            {
                where,
            });

            return {message: "${af} User(s) deleted successfully, af, d,"};
        }
        catch(error)
        {
            throw new DbError("Failed to delete database entry(s).", {
                data:username,
                cause: error,
            });
        }
    }
}

module.exports = UserRepository;