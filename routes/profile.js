const express = require('express');
const router = express.Router();
const { myProfile, getUserProfile, getAllUsers, getMyProjects, searchUser } = require('../controllers/profileController');
const { authMiddleware } = require('../middleware/authMiddleware');


router.get('/me',authMiddleware, myProfile);
router.route("/user/:id").get(authMiddleware, getUserProfile);
router.route("/my/projects").get(authMiddleware, getMyProjects);
router.route('/user/search').post(authMiddleware,searchUser);



module.exports = router;
