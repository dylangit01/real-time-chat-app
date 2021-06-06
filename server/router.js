const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Server is listening? Yes, it is');
});

module.exports = router;