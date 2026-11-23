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

    async createUser({ userInfo }, options = {})
    {
        try
        {
            return await this.model.create(userInfo, options);
        }
        catch(error)
        {
            console.error(error);
        }
    }
}

module.exports = UserRepository;