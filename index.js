const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


//In memory- stage

const users = [];
const exercises = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


// 1. Create a new user
app.post('/api/users', (req, res)=>{
  const { username } = req.body;
  const userId = users.length + 1; // simple incremental ID

  const newUser = { _id: userId.toString(), username };
  users.push(newUser);

  res.json(newUser);
});


// 2. Get all users
app.get('/api/users', (req, res)=> {
  res.json(users);
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
