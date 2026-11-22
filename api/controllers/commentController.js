async function getComment(req, res, next)
{
    const { id } = req.params;

    res.status(200).json({ message: "getComment done", ID: id });
}

async function getComments(req, res, next)
{
    res.status(200).json([]);
}

async function createComment(req, res, next)
{
    let { text, rating } = req.body || {};

    const commentInfo =
    {
        text,
        rating
    };

    res.status(201).json({ message: "createComment done", commentInfo });
}

async function updateComment(req, res, next)
{
    const { ID, text, rating } = req.body || {};

    res.status(200).json(
    {
        message: "updateComment done",
        ID: req.params.id,
        commentInfo:
        {
            ID,
            text,
            rating
        }
    });
}

async function deleteComment(req, res, next)
{
    res.status(200).json({ message: "deleteComment done", ID: req.params.id });
}

module.exports =
{
    getComment,
    getComments,
    createComment,
    updateComment,
    deleteComment,
};