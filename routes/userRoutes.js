const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//[END POINTS] - ADMIN
router.get('/', userController.login);
router.get('/signup', userController.signup);
router.get('/shortcut', userController.shortcut);
router.get('/home', userController.home);
router.get('/delete-students/:id', userController.delete);
router.get('/students', userController.fetch);
router.get('/dashboard', userController.fetch_students);
router.get('/update-students/:id', userController.edit);
router.get('/registration', userController.registration);
router.post('/add-students', userController.create);
router.post('/register_student', userController.registration_student);
router.post('/update-students/:id', userController.update);
router.post('/signin', userController.signin);
router.post('/register', userController.register);

//[END POINTS] - USER
router.get('/login-user', userController.user_login);

//[END POINTS ERROR PAGE]
router.get('/error', userController.error_page_401);
//[EXPORT MODULE TO USED GLOBALLY]
module.exports = router;