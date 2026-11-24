async function getBuyer(req, res, next)
{
    const { id } = req.params;

    res.status(200).json({ message: "getBuyer done", ID: id });
}

async function getBuyers(req, res, next)
{
    res.status(200).json([]);
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

module.exports =
{
    getBuyer,
    getBuyers,
    /*createBuyer,*/
    updateBuyer,
    /*deleteBuyer,*/
};