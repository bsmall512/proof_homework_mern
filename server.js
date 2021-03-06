const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const populateDb = require('./populateDb');

const users = require('./routes/api/users');

const app = express();
// body parser middleware
app.use(bodyParser.json());
// DB config
const db = require('./config/keys').mongoURI;

// connect to mongodb
mongoose.connect(db)
	.then(() => console.log("MongoDB Connected..."))
	.catch(err => console.log(err));

populateDb();

app.use('/api/users', users);	
 
const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Server started on port ${port}`)});
