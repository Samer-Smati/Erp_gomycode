require('dotenv').config();

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection

db.on('error', err => console.error(err))
db.once('open', () => console.log('Connected to database'))



app.use(express.json());
app.use(cors()); 
const usersRoutes = require('./routes/users');
const loginRoutes = require('./routes/login');
const forgetPasswordRoutes = require('./routes/forgetpassword');

app.use('/users',usersRoutes); 
app.use('/login',loginRoutes); 
app.use('/forgetpw',forgetPasswordRoutes);  
const PORT = process.env.PORT || 8080 

app.listen(PORT, ()=> console.log(`listening on port ${PORT}!!`));    