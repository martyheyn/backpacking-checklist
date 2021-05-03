const express = require('express');
const router = express.Router();

// Import model to connect to
// const Sack = require('../../models/Sack.js');

// @route  GET api/sack/
// @desc   Get all of the sacks
// @access public
router.get('/', async (req, res) => {
  try {
    const sacks = await Sack.find().populate(req);
    res.json(sacks);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
