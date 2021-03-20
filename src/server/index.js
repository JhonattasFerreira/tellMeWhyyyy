const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

const app = express();
dotenv.config();

const port = 3000;

app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.json());

app.post('/postAnalysis', async(req, res) => {
  console.log('req', req.body)
  const {url} = req.body;

  const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&of=json&lang=en&url=${url}`)
  const data = await response.json();

  res.send(data);
});

app.listen(port, () => {
  console.log(`Listen in the port: ${port}`)
});

