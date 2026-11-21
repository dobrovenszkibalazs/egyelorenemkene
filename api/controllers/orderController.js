async function getOrder(req, res, next)
{
    const { id } = req.params;

    res.status(200).json({ message: "getOrder done", ID: id });
}

async function getOrders(req, res, next)
{
    res.status(200).json([]);
}

async function createOrder(req, res, next)
{
    let { orderTimestamp, buyerId, billingDetailsId, products } = req.body || {};

    const orderInfo =
    {
        orderTimestamp,
        buyerId,
        billingDetailsId,
        products,
    };

    res.status(201).json({ message: "createOrder done", orderInfo });
}

async function updateOrder(req, res, next)
{
    const { ID, orderTimestamp, buyerId, billingDetailsId, products } = req.body || {};

    res.status(200).json(
    {
        message: "updateOrder done",
        ID: req.params.id,
        orderInfo:
        {
            ID,
            orderTimestamp,
            buyerId,
            billingDetailsId,
            products,
        }
    });
}

async function deleteOrder(req, res, next)
{
    res.status(200).json({ message: "deleteOrder done", ID: req.params.id });
}

module.exports =
{
    getOrder,
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder,
};