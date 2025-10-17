const express = require('express');
const router = express.Router();
let products = [
  { id: 1, name: 'Laptop', price: 55000 },
  { id: 2, name: 'Smartphone', price: 25000 }
];
router.get('/', (req, res) => {
  res.json(products);
});
router.post('/', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }
  const newProduct = {
    id: products.length + 1,
    name,
    price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});
module.exports = router;
