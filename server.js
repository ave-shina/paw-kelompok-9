const express = require('express')
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require("path")

//connection DB
const mongoose = require('mongoose')
const MONGO_URl="mongodb+srv://admin:admin123@cluster0.x5kwo.mongodb.net/users?retryWrites=true&w=majority";

  const con =  mongoose.connect(MONGO_URl)
  const dbCon = mongoose.connection
  
  dbCon.on('error',(error)=>console.error(error))
  dbCon.once('open', ()=>console.log('Database Connected..'))
// end connection

const app = express()

const PORT = 3000;

//log request
app.use(morgan('tiny'));

//parse request to body-parser
app.use(express.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs");
//app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//load routers
app.use('/',require('./server/routes/router'))
  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})