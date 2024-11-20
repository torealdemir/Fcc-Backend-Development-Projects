require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dns = require('dns');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(`${process.cwd()}/public`));

let urlDatabase = {}; // Temporary in-memory database
let counter = 1; // To generate unique short URLs

// Helper function to validate URL format
function isValidUrl(url) {
  const regex = /^(http:\/\/|https:\/\/)([a-z0-9-]+\.)+[a-z0-9]{2,4}(\S*)$/i;
  return regex.test(url);
}

// Create short URL endpoint
app.post('/api/shorturl', (req, res) => {
  const originalUrl = req.body.url;

  if (!isValidUrl(originalUrl)) {
    return res.json({ error: 'invalid url' });
  }

  const urlHost = new URL(originalUrl).hostname;
  dns.lookup(urlHost, (err, address, family) => {
    if (err) {
      return res.json({ error: 'invalid url' });
    }

    const shortUrl = counter++;
    urlDatabase[shortUrl] = originalUrl;
    res.json({
      original_url: originalUrl,
      short_url: shortUrl
    });
  });
});

// Redirect to original URL endpoint
app.get('/api/shorturl/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl;

  if (urlDatabase[shortUrl]) {
    res.redirect(urlDatabase[shortUrl]);
  } else {
    res.json({ error: 'invalid url' });
  }
});

// Home route
app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Simple API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

