const express = require('express');
const router = express.Router();
const productController = require('../controller/prodController');


router.get('/products', productController.getAllProducts);
router.post('/products', productController.insertProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct)
module.exports = router;