const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Harry Potter API backend is running');
});

app.get('/api/characters', async (req, res) => {
  try {
    const response = await axios.get('https://hp-api.onrender.com/api/characters');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching characters' });
  }
});

app.get('/api/house/ravenclaw', async (req, res) => {
  try {
    const response = await axios.get('https://hp-api.onrender.com/api/characters/house/ravenclaw');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Ravenclaw characters' });
  }
});

app.get('/api/staff', async (req, res) => {
  try {
    const response = await axios.get('https://hp-api.onrender.com/api/characters/staff');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching staff members' });
  }
});

app.get('/api/spells', async (req, res) => {
  try {
    const response = await axios.get('https://hp-api.onrender.com/api/spells');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching spells' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend server running at http://localhost:${PORT}`);
});
