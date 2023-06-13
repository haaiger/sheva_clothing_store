const router = require('express').Router();
const products = require('../products');

router.get('/', async (request, response) => {
  response.json(products);
});

module.exports = router;
