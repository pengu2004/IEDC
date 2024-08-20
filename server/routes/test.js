const express=require('express')
const Router=express.Router();

const {getTest}=require("../controllers/test");

Router.get("/test",getTest);


module.exports=Router;