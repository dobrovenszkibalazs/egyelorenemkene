async function getGame(req, res, next)
{
    const { id } = req.params;

    res.status(200).json({ message: "getGame done", ID: id });
}

async function getGames(req, res, next)
{
    res.status(200).json([]);
}

async function createGame(req, res, next)
{
    let { name, isWinner, prize, type, cost } = req.body || {};

    const gameInfo =
    {
        name,
        isWinner,
        prize,
        type,
        cost
    };

    res.status(201).json({ message: "createGame done", gameInfo });
}

async function updateGame(req, res, next)
{
    const { ID, name, isWinner, prize, type, cost } = req.body || {};

    res.status(200).json(
    {
        message: "updateGame done",
        ID: req.params.id,
        gameInfo:
        {
            ID,
            name,
            isWinner,
            prize,
            type,
            cost
        }
    });
}

async function deleteGame(req, res, next)
{
    res.status(200).json({ message: "deleteGame done", ID: req.params.id });
}

module.exports =
{
    getGame,
    getGames,
    createGame,
    updateGame,
    deleteGame,
};