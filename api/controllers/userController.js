async function getUser(req, res, next)
{
    const { id } = req.params;

    res.status(200).json({ message: "getUser done", ID: id });
}

async function getUsers(req, res, next)
{
    res.status(200).json([]);
}

async function createUser(req, res, next)
{
    let { username, password} = req.body || {};

    const userInfo =
    {
        username,
        password
    };

    res.status(201).json({ message: "createUser done", userInfo });
}

async function updateUser(req, res, next)
{
    const { ID, username, password } = req.body || {};

    res.status(200).json(
    {
        message: "updateUser done",
        ID: req.params.id,
        userInfo:
        {
            ID,
            username,
            password,
        }
    });
}

async function deleteUser(req, res, next)
{
    res.status(200).json({ message: "deleteUser done", ID: req.params.id });
}

module.exports =
{
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};