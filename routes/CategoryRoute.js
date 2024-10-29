var express = require('express');
var router = express.Router();
var categoryModel = require('./../model/category')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//them danh muc
//http://localhost:3000/category/add
router.post('/add', async function (req, res, next) {
  try {
      const { cateName, image } = req.body
      const addcate = { cateName, image }
      const add = await categoryModel.create(addcate);
      res.status(200).json(add)
  } catch (error) {
      res.status(400).json({ error: e.message });
  }
})

// Lấy ra danh mục
// http://localhost:3000/category/get
router.get('/get', async function (req, res, next) {
  try {
      const getcate = await categoryModel.find();
      res.status(200).json(getcate);
  } catch (error) {
      // Sửa lỗi từ 'e' thành 'error' để đúng biến
      res.status(400).json({ error: error.message });
  }
});


module.exports = router;
