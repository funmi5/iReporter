import express from 'express';

import router from './routes/index';

const bodyParser = require('body-parser');

const app = express();

// to load up env file that includes values for environment varibales
require('dotenv').config();

console.log(process.env);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);


const port = process.env.PORT || 5000;

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});


export default app;