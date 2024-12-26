const express = require('express');
const cors = require('cors');
const facebookRoutes = require('./routes/routes');
const errorHandler = require('./middleware/errorHandlers');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/facebook', facebookRoutes);
app.use(errorHandler);

module.exports = app;