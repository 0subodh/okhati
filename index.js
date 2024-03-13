const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRoutes');
const openingHoursRouter = require('./routes/openingHoursRoutes');
const connectToDB = require('./config/connectToDB');
connectToDB();
const app = express();

app.use(cors()); // middleware to handle cors request
app.use(express.json()); // middleware to parse body (req.body)
app.use(cookieParser()); // middleware to read the cookie from the req sent by client

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Express Server</h1>');
});

app.use('/users', userRouter);
app.use('/opening-hours', openingHoursRouter);

app.use('*', (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status || 500);
  res.send('error');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
