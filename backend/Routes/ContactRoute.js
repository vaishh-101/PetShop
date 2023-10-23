const express = require('express');
const Contactrouter = express.Router();
const ContactUs = require('../models/ContactUs'); // Import your ContactUs model


// Get all contactus records
Contactrouter.get('/contactus', async (req, res) => {
  try {
    const contactUsRecords = await ContactUs.findAll();
    res.json(contactUsRecords);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new contactus record
Contactrouter.post('/contactus', async (req, res) => {
  try {
    const { fullname, email, message } = req.body;
    const newContactUsRecord = await ContactUs.create({ fullname, email, message });
    res.status(201).json(newContactUsRecord);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

module.exports = Contactrouter;
