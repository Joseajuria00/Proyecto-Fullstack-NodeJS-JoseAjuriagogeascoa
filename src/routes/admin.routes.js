const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/admin.controller')

/* ADMIN ROUTES */
router.get('/', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create', adminControllers.createSend);
router.get('/edit/:id', adminControllers.edit);
router.post('/edit/:id', adminControllers.editSend);
router.delete('/delete/:id', adminControllers.delete);

/* AUTH ROUTES */
router.get('/login', (req, res) => res.send('Route for Login View'));
router.post('/login', (req, res) => res.send('Route for '));
router.get('/register', (req, res) => res.send('Route for Register View'));
router.post('/register', (req, res) => res.send('Route for '));

module.exports = router;