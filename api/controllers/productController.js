async function getProduct(req, res, next)
{
    const { id } = req.params;

    res.status(200).json({ message: "getProduct done", ID: id });
}

async function getProducts(req, res, next)
{
    res.status(200).json([]);
}

async function createProduct(req, res, next)
{
    let { name, description, price, type } = req.body || {};

    const productInfo =
    {
        name,
        description,
        price,
        type,
    };

    res.status(201).json({ message: "createProduct done", productInfo });
}

async function updateProduct(req, res, next)
{
    const { ID, name, description, price, type } = req.body || {};

    res.status(200).json(
    {
        message: "updateProduct done",
        ID: req.params.id,
        productInfo:
        {
            ID,
            name,
            description,
            price,
            type,
        }
    });
}

async function deleteProduct(req, res, next)
{
    res.status(200).json({ message: "deleteProduct done", ID: req.params.id });
}

module.exports =
{
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};