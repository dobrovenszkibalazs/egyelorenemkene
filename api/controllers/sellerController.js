async function getSeller(req, res, next)
{
    const { id } = req.params;

    res.status(200).json({ message: "getSeller done", ID: id });
}

async function getSellers(req, res, next)
{
    res.status(200).json([]);
}

async function createSeller(req, res, next)
{
    let { username, bio, password } = req.body || {};

    const sellerInfo =
    {
        username,
        bio,
        password
    };

    res.status(201).json({ message: "createSeller done", sellerInfo });
}

async function updateSeller(req, res, next)
{
    const { ID, username, bio, password } = req.body || {};

    res.status(200).json(
    {
        message: "updateSeller done",
        ID: req.params.id,
        sellerInfo:
        {
            ID,
            username,
            bio,
            password
        }
    });
}

async function deleteSeller(req, res, next)
{
    res.status(200).json({ message: "deleteSeller done", ID: req.params.id });
}

module.exports =
{
    getSeller,
    getSellers,
    createSeller,
    updateSeller,
    deleteSeller,
};