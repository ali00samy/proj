const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const users = require('./routes/users');
const auth = require('./routes/auth');
const app = express();

app.use(cors());

mongoose.connect(process.env.MONGO_DB,{ useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/users', users);
    
const port = process.env.PORT || 8080;
app.listen(port,()=> console.log(`Listening on port ${port}...`));    