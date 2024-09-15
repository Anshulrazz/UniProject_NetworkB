const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/authMiddleware');
const{sendMessage, getMessages} = require('../controllers/messageControllers');
const {
    accessChats,
    fetchAllChats,
    creatGroup,
    renameGroup,
    addToGroup,
    removeFromGroup,
} = require('../controllers/chatController');
router.post('/', authMiddleware, accessChats);
router.get('/', authMiddleware, fetchAllChats);
router.post('/group', authMiddleware, creatGroup);
router.patch('/group/rename', authMiddleware, renameGroup);
router.patch('/groupAdd', authMiddleware, addToGroup);
router.patch('/groupRemove', authMiddleware, removeFromGroup);
router.delete('/removeuser', authMiddleware);
router.post("/send", authMiddleware, sendMessage);
router.get("/:chatId", authMiddleware, getMessages);

module.exports = router;
