const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const path = require('path');
require('dotenv').config();

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('views', [path.join(__dirname, 'views'), path.join(__dirname, 'views/partials')]);
app.set('view engine', 'ejs');

// database connection
mongoose.connect(process.env.MONGODB_URI)
  .then((result) => app.listen(process.env.PORT))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);