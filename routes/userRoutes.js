const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//routes
router.get('/', userController.home);
router.post('/add-student', userController.create);
router.get('/students', userController.fetch);
router.get('/edit-students/:id', userController.edit);

module.exports = router;