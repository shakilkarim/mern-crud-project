const express=require('express');
const { createProducts, readProducts, readOneProduct, updateProduct, deleteProduct } = require('../controllers/product');

const router=express.Router();

router.post('/createProduct',createProducts);
router.get('/readProduct',readProducts);
router.get('/readOneProduct/:id',readOneProduct);
router.post('/updateProduct/:id',updateProduct);
router.delete('/deleteProduct/:id',deleteProduct);




module.exports =router;