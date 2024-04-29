const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//routes pages
router.get('/', userController.login);
router.get('/signup', userController.signup);
router.get('/shortcut', userController.shortcut);
router.get('/home', userController.home);
router.get('/delete-students/:id', userController.delete);
router.get('/students', userController.fetch);
router.get('/dashboard', userController.dashboard);
router.get('/update-students/:id', userController.edit);
router.get('/registration', userController.registration);
router.post('/add-students', userController.create);
router.post('/update-students/:id', userController.update);
router.post('/signin', userController.signin);
router.post('/register', userController.register);

//routes error
router.get('/error', userController.error_page_401);

//exports the module to used globally
module.exports = router;