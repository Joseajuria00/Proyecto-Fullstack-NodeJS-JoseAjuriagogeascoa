const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shop.controller');

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.itemID);
router.post('/item/:id/add', shopControllers.itemAdd);
router.get('/cart', shopControllers.cart);
router.post('/cart', (req, res) => shopControllers.cartCheckout);

module.exports = router;