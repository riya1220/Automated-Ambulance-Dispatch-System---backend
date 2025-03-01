const mongoose = require('mongoose');
const Ambulance = require('../models/Ambulance');

// connect to database
mongoose.connect('mongodb://localhost:27017/ambulance_dispatch', { useNewUrlParser: true, useUnifiedTopology: true });

//ambulance to be added
const ambulances = [
    { location: { type: 'Point', coordinates: [77.5946, 12.9716] }, status: 'available' },
    { location: { type: 'Point', coordinates: [77.7046, 12.9916] }, status: 'available' },
    { location: { type: 'Point', coordinates: [77.8146, 12.9616] }, status: 'available' }
];

//insert amb
Ambulance.insertMany(ambulances)
    .then(() => {
        console.log('Ambulances added');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error adding ambulances:', err);
        mongoose.connection.close();
    });