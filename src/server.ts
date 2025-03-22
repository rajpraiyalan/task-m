import express from 'express';
import {PORT} from './config/constants.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Works!')
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});