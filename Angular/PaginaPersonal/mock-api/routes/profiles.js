const express = require('express');
const router = express.Router();
const profiles = require('../mock-data/profiles.json');

router.get('/', (req, res) => {
  res.json(profiles);
});

module.exports = router;