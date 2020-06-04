const router = require('express').Router();
const db = require('../dbconnect');

router.post('/weatherInfo', async (req, res) => {
	
	res.send(200);
})

router.put('/weatherInfo', async (req, res) => {

	res.send(200);
})

module.exports = router;