const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//routes
router.get('/', userController.login);
router.get('/shortcut', userController.shortcut);
router.get('/home', userController.home);
router.post('/add-students', userController.create);
router.get('/students', userController.fetch);
router.get('/update-students/:id', userController.edit);
router.post('/update-students/:id', userController.update);
router.get('/delete-students/:id', userController.delete);
router.post('/signin', userController.signin);

//routes error
router.get('/401', userController.error_page_401);

//exports the module to used globally
module.exports = router;