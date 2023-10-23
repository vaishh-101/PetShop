
const express = require('express');
const User = require('../models/User'); // Import the User model
const UserRoute = express.Router();
// Get all users
UserRoute.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new user
UserRoute.post('/users', async (req, res) => {
  try {
    const { fullname, username, password } = req.body;
    const user = await User.create({ fullname, username, password });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a user by ID
UserRoute.patch('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, username, password } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.fullname = fullname;
    user.username = username;
    user.password = password;

    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a user by ID
UserRoute.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.destroy();

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = UserRoute;
