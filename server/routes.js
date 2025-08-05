const express = require('express');
const {signin, userDetails, followUser, updateProfile, searchUser, logout} = require("./controllers/user-controllers");
const {login} = require('./controllers/user-controllers');
const auth = require('./middleware/auth');
const router = express.Router();


router.post('/signin',signin);
router.post('/login', login);
router.get('/user/:id' ,auth, userDetails);
router.put('/user/follow/:id' , auth , followUser);

router.put('/update', auth , updateProfile);
router.get('/users/search/:query', auth , searchUser);
router.post('/logout' , auth , logout);

module.exports = router;
