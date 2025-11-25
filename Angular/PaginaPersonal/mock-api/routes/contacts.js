const express = require('express');
const router = express.Router();
const contacts = require('../mock-data/contacts.json');

//GET
router.get('/', (req, res) => {
  res.json(contacts);
});

// POST
router.post('/', (req, res) => {
  const newContact = req.body;

  // Validación básica
  if (!newContact.email ) {
    return res.status(400).json({'code': 21, 'description': 'The email is mandatory'});
  }

  console.log('Nuevo contacto recogido (solo en memoria):', newContact);
  contacts.push(newContact);

  // Devuelve lo del JSON
  res.status(201).json(contacts);
});

module.exports = router;