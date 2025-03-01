# Automated-Ambulance-Dispatch-System-backend-
This project implements an Automated Ambulance Dispatch System to optimize ambulance allocation for emergency response. It uses real-time GPS tracking, automated routing, and data-driven decision-making to ensure faster response times and efficient resource management.

## Features
- Real-time tracking of available ambulances
- Automated ambulance dispatch based on proximity
- Route optimization for fastest emergency response
- REST API for ambulance management and dispatching
- Secure and scalable backend using Node.js, Express, and MongoDB

## Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose for schema modeling)
- Mapping & Routing: Google Maps API / GPS-based location tracking
- Deployment: Cloud-based (AWS, Heroku, or local server)

## Dataset
- Database: MongoDB stores ambulance details, locations, and statuses
- Records: Real-time updates on ambulance availability and dispatches

## Installation & Setup  
- Clone the repository: 
   ```bash
   git clone https://github.com/riya1220/Ambulance-Dispatch-System.git  
   cd Ambulance-Dispatch-System
   ```
- Install dependencies:
  ```bash
  npm install 
  ```
- Start the server:
  ```bash
  node app.js  
  ```
- API Endpoints:
  GET /ambulances → Fetch all available ambulances
  POST /ambulances → Add a new ambulance
  POST /dispatch → Find and assign the nearest ambulance


## Results
- Faster emergency response time
- Optimized ambulance allocation
- Efficient route calculation for minimal delays

## Files breakdown
- addAmbulances.js → Populates MongoDB with ambulance data.
- app.js → Sets up the Express.js backend and connects to MongoDB.
- index.js → Defines API routes for retrieving and dispatching ambulances.
- ambulance.js → Handles server-side rendering with Angular.
