const shopControllers = {
    shop: (req, res) => res.send('Route for Shop View'),
    itemID: (req, res) => res.send(`Route for find and retrieve a product from an ID: ${req.params.id}`),
    itemAdd: (req, res) => res.send('Route for add the current item to the shop cart'),
    cart: (req, res) => res.send('Route for Cart View'),
    cartCheckout: (req, res) => res.send('Route for go to checkout page'),
}

module.exports = shopControllers;