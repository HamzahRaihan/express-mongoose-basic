require('dotenv/config');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const router = require('./routes');

const db = require('./config/db');

db.then((result) => {
  console.log('connected to mongodb database');
}).catch((err) => {
  console.log(err);
});

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log('server running in port ' + PORT);
});
