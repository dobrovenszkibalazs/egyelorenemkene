async function getBillingDetail(req, res, next)
{
    const { id } = req.params;

    res.status(200).json({ message: "getBillingDetail done", ID: id });
}

async function getBillingDetails(req, res, next)
{
    res.status(200).json([]);
}

async function createBillingDetail(req, res, next)
{
    let { billingMethod, shipmentMethod, address} = req.body || {};

    const billingDetailInfo =
    {
        billingMethod,
        shipmentMethod,
        address
    };

    res.status(201).json({ message: "createBillingDetail done", billingDetailInfo });
}

async function updateBillingDetail(req, res, next)
{
    const { ID, billingMethod, shipmentMethod, address } = req.body || {};

    res.status(200).json(
    {
        message: "updateBillingDetail done",
        ID: req.params.id,
        billingDetailInfo:
        {
            ID,
            billingMethod,
            shipmentMethod,
            address
        }
    });
}

async function deleteBillingDetail(req, res, next)
{
    res.status(200).json({ message: "deleteBillingDetail done", ID: req.params.id });
}

module.exports =
{
    getBillingDetail,
    getBillingDetails,
    createBillingDetail,
    updateBillingDetail,
    deleteBillingDetail,
};