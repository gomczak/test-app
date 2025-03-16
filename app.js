const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const path = require('path');
const cookieParser = require('cookie-parser');
const { requireAuth } = require('./middleware/authMiddleware');
require('dotenv').config();

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('views', [path.join(__dirname, 'views'), path.join(__dirname, 'views/partials')]);
app.set('view engine', 'ejs');

// database connection
mongoose.connect(process.env.MONGODB_URI)
  .then((result) => app.listen(process.env.PORT))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoutes);
