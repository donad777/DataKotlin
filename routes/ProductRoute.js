var express = require('express');
var router = express.Router();
var productModel = require('./../model/product')
var categoryModel = require('./../model/category')
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

//http://localhost:3000/product/add
router.post('/add', async function (req, res, next) {
    try {
        const { productName, description, price, image, category } = req.body
        const addProduct = { productName, description, price, image, category }
        const product = await productModel.create(addProduct)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: e.message });
    }
})


//lay ra san pham theo danh muc
//http://localhost:3000/product/getProductbyIdcate
router.get('/getProductbyIdcate', async function (req, res, next) {
    try {
        const { category } = req.query;
        const products = await productModel.find({ category: category });
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

//lay ra tat ca san pham
//http://localhost:3000/product/getAll
router.get('/getAll', async function (req, res, next) {
    try {
        const getProduct = await productModel.find()
        res.status(200).json(getProduct);
    } catch (error) {
        res.status(400).json({ error: e.message });
    }
})

// chi tiet san phảm
//http://localhost:3000/product/detailProduct
router.get('/detailProduct', async (req, res, next) => {
    const { _id } = req.query; 

    try {
        const product = await productModel.findById(_id);
        if (!product) {
            return res.status(403).json({ status: false, message: 'Sản phẩm không tồn tại!' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'Lỗi server!' });
    }
});

module.exports = router;
