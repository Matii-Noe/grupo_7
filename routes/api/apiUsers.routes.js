const express = require('express');
const router = express.Router();
const apiUsers = require('../../controllers/api/apiUsersController');

router.get('/', apiUsers.list);

router.get('/:id', apiUsers.profile)




module.exports = router