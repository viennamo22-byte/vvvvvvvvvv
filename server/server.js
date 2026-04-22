// server/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const locationRoutes = require('./routes/location');
const searchRoutes = require('./routes/search');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/findmydevice';

mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error', err));

app.use('/api', authRoutes);
app.use('/api', locationRoutes);
app.use('/api', searchRoutes);

app.get('/', (req, res) => res.json({ ok: true, msg: 'FindMyDevice API' }));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
