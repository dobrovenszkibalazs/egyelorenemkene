async function getBuyer(req, res, next)
{
    const { id } = req.params;

    res.status(200).json({ message: "getBuyer done", ID: id });
}

async function getBuyers(req, res, next)
{
    res.status(200).json([]);
}

async function createBuyer(req, res, next)
{
    let { username, password} = req.body || {};

    const buyerInfo =
    {
        username,
        password
    };

    res.status(201).json({ message: "createBuyer done", buyerInfo });
}

async function updateBuyer(req, res, next)
{
    const { ID, username, password } = req.body || {};

    res.status(200).json(
    {
        message: "updateBuyer done",
        ID: req.params.id,
        buyerInfo:
        {
            ID,
            username,
            password
        }
    });
}

async function deleteBuyer(req, res, next)
{
    res.status(200).json({ message: "deleteBuyer done", ID: req.params.id });
}

module.exports =
{
    getBuyer,
    getBuyers,
    createBuyer,
    updateBuyer,
    deleteBuyer,
};