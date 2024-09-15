const express = require('express');
const router = express.Router();
const { register, login, profilePicUpload , logout, followUser} = require('../controllers/authController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.post("/uploadprofilepic",authMiddleware, profilePicUpload);
router.route("/follow/:id").put(authMiddleware, followUser);


module.exports = router;
