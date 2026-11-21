async function getOrder(req, res, next)
{
    const { id } = req.params;

    const order = await orderService.getOrder({ ID: id });

    res.status(200).json(order);
}

async function getOrders(req, res, next)
{
    res.status(200).json(await orderService.getOrders());
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

    res.status(201).json(await orderService.createOrder({ orderInfo }));
}

async function updateOrder(req, res, next)
{
    const { ID, orderTimestamp, buyerId, billingDetailsId, products } = req.body || {};

    res.status(200).json(await orderService.updateOrder(
    {
        ID: req.params.id,
        orderInfo:
        {
            ID,
            orderTimestamp,
            buyerId,
            billingDetailsId,
            products,
        }
    }));
}

async function deleteOrder(req, res, next)
{
    res.status(200).json(await orderService.deleteOrder({ ID: req.params.id }));
}

module.exports =
{
    getOrder,
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder,
};