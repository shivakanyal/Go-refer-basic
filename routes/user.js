const express = require('express');
const userContorller = require('../controllers/user')

const router = express.Router()


router.get('/',userContorller.getAddRecord)

router.get('/add-record',userContorller.getAddRecord);

router.get('/get-records',userContorller.getAllRecords);

router.post('/add-record',userContorller.postAddRecord)

router.post('/search',userContorller.search);

module.exports = router;