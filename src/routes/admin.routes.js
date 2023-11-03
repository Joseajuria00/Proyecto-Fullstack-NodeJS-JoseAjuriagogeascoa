const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/admin.controller')

/* ADMIN ROUTES */
router.get('/', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create', adminControllers.createSend);
router.get('/edit/:id', adminControllers.edit);
router.put('/edit/:id', adminControllers.editSend);
router.delete('/delete/:id', adminControllers.delete);

/* AUTH ROUTES */
router.get('/login', adminControllers.login);
router.post('/login', adminControllers.loginSend);
router.get('/register', adminControllers.register);
router.post('/register', adminControllers.registerSend);
router.get('/logout', adminControllers.logout);

module.exports = router;