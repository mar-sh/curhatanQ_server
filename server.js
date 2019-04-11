const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const dbURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/curhatanQ'

const mainRouter = require('./routes');
const curhatanRouter = require('./routes/curhatan')

mongoose.connect(dbURL, { useNewUrlParser: true });
mongoose.connection.on('error', (error) => {
  console.log(error);
  console.log('Something is wrong with your database connection');
  process.exit();
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', mainRouter);
app.use('/curhatan', curhatanRouter)

app.listen(port, _ => console.log(`running on port: ${port}`))

