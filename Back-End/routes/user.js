const express = require('express');
const router = express.Router();
const apiCtrl = require('../controller/apiController');


router.get('/', apiCtrl.getAllUser);
router.post('/', apiCtrl.createNewUser);
router.get('/:userId', apiCtrl.getOneUser);
router.delete('/:userId', apiCtrl.deleteUser);
router.patch('/:userId', apiCtrl.updateUser);
router.get('/:username/:password', apiCtrl.authUser);

module.exports = router;