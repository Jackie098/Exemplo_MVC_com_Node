const express = require('express');
const router = express.Router();

//EXAMPLE
router.get('/', (req, res) => res.render("Hello"));


module.exports = router;