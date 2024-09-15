const express = require('express');
const router = express.Router();
const { uploadProject, likeAndUnlikePost, commentOnPost, addCredit, makePremium, unlockProject, getAllProjects , } = require('../controllers/projectController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.route("/upload").post(authMiddleware, uploadProject);
router.route("/like/:id").post(authMiddleware, likeAndUnlikePost);
router.route("/comment/:id").post(authMiddleware, commentOnPost);
router.route("/addcredit").post(authMiddleware, addCredit);
router.route("/makep/:id").post(authMiddleware, makePremium);
router.route("/unlockp/:id").post(authMiddleware, unlockProject);
router.route("/feed").get(authMiddleware,getAllProjects);

module.exports = router;