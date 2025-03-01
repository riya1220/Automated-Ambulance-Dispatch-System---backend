const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

// Middleware
app.use(bodyParser.json());a

// Database connection
mongoose.connect('mongodb://localhost:27017/ambulance_dispatch', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // corrected line
