const express = require('express');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
