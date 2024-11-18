// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/:date", function (req, res) {
  let dateInput = req.params.date;
  let date;

  //check input for valid timestamp number
  if(!isNaN(dateInput) && /^\d+$/.test(dateInput)){
    date = new Date(parseInt(dateInput));
  }else {
    date = new Date(dateInput); // assume its a date string
  }

  if(isNaN(date.getTime())){
    res.json({ error: "Invalid Date"});
    return;
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  })
});


app.get("/api", (req,res)=>{
  const currentDate = new Date() //current date and time
  res.json({
    unix: currentDate.getTime(), // unix timestamp in miliseconds
    utc: currentDate.toUTCString(), // UTC date
  })
})


// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
