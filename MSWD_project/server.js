const express = require('express');
const mongoose = require('mongoose');
const Project = require('./models/project');

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

mongoose.connect('mongodb://localhost:27017')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

const express = require('express');
const router = express.Router();
const Project = require('./models/project'); 

router.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find(); 
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

module.exports = router; 

