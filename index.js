const express = require('express');
const router = express.Router();
const Ambulance = require('../models/Ambulance');

// Fetch all ambulances
router.get('/ambulances', async (req, res) => {
    const ambulances = await Ambulance.find();
    res.json(ambulances);
});

// Add a new ambulance
router.post('/ambulances', async (req, res) => {
    const { location, status } = req.body;
    const ambulance = new Ambulance({ location, status });
    await ambulance.save();
    res.json(ambulance);
});

// Find nearest available ambulance
router.post('/dispatch', async (req, res) => {
    const { coordinates } = req.body;
    const ambulance = await Ambulance.findOne({
        status: 'available',
        location: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates
                },
                $maxDistance: 5000 // 5km radius
            }
        }
    });
    if (ambulance) {
        ambulance.status = 'dispatched';
        await ambulance.save();
        res.json(ambulance);
    } else {
        res.status(404).send('No available ambulances nearby');
    }
});

module.exports = router;