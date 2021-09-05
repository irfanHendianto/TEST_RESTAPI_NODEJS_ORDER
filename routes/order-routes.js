const express = require('express');
const router = express.Router();
const {getAlldata,createOrders} =require('../controllers/orderController');

router.get('/orders', getAlldata);
router.post('/order/create', createOrders);

module.exports = {
    routes: router
}