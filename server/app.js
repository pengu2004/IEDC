// import
const express=require('express')
const morgan=require('morgan')
const cors=require('cors');
const { MongooseError, default: mongoose, connect } = require('mongoose');
require("dotenv").config();


const app=express();

app.use( morgan("dev"));
mongoose.connect(process.env.URI).then(()=>console.log("DB conected")).catch(()=>console.log("There was an Error"));
app.use(cors(origin=true,credentials=true))


const port=process.env.port||8080

const testRoute=require('./routes/test');

app.use("/",testRoute);
const server=app.listen(port,() => console.log(`Server at ${port}`));