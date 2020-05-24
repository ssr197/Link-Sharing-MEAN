const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//require('dotenv/config');
const app = express();
app.use(bodyParser.json());
app.use(express.json());

const userRouters = require('./routes/user');
app.use('/user', userRouters);
mongoose.connect(
     'mongodb://127.0.0.1:27017', 
     { useNewUrlParser: true },
     () => console.log("Connnected to db"),
     (error) => console.log(error)
);

app.get('/', (req, res) => {
     res.send('This is Home');
});
//Listening to the server
app.listen(3000);
