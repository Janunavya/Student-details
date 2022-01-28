const express = require('express')
const cors = require('cors')
// const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const URL = require('./config.json').url;
const PORT = 5000


const app = express();

app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.Promise = global.Promise;
mongoose.connect(URL, { useNewUrlParser:true}).then(res=>{
    console.log('mongodb connected');
}).catch(err =>{
    console.log(err.message);
})

//default route
app.use('/students', require('./route/studentRoute'));

// server call
app.listen(PORT,()=>{
    console.log('server is up & running at http://localhost:5000')
})