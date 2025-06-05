const express = require('express');
const bodyParser = require('body-parser');
const dns = require('dns');
const cors = require('cors');

const app = express();

let urlDatabase = {};
let counter = 1;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/api/shorturl', (req, res) => {
  const url = req.body.url;
  try {
    const urlObj = new URL(url);
    dns.lookup(urlObj.hostname, (err) => {
      if (err) {
        res.json({ error: 'invalid url' });
      } else {
        const shortUrl = counter++;
        urlDatabase[shortUrl] = url;
        res.json({ original_url: url, short_url: shortUrl });
      }
    });
  } catch (e) {
    res.json({ error: 'invalid url' });
  }
});

app.get('/api/shorturl/:short_url', (req, res) => {
  const shortUrl = req.params.short_url;
  const originalUrl = urlDatabase[shortUrl];
  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.json({ error: 'No short URL found for the given input' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(Listening on port ${port});
});
