var express = require('express');
var router = express.Router();
var userModel = require('./../model/user')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


//dang ki
//http://localhost:3000/users/register
router.post('/register', async function (req, res, next) {
  try {
    const { email, fullName, password } = req.body
    const adduser = { email, fullName, password }
    const add = await userModel.create(adduser);
    res.status(200).json(add)
  } catch (error) {
    res.status(400).json({ error: e.message });
  }
})

// Đăng nhập
// http://localhost:3000/users/login
router.post('/login', async function (req, res, next) {
  try {
    const { email, password } = req.body;
    
    // Tìm kiếm người dùng theo email
    const user = await userModel.findOne({ email: email });

    // Kiểm tra nếu người dùng không tồn tại
    if (!user) {
      return res.status(400).json({ error: "Người dùng không tồn tại." });
    }

    // Kiểm tra mật khẩu
    if (user.password !== password) {
      return res.status(400).json({ error: "Mật khẩu không đúng." });
    }

    res.status(200).json({ message: "Thanh Cong" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
