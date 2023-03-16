const express = require("express");
const server = express();
const bodyParser=require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const config=require("./../config/config.json")
var mongoose = require('mongoose');
server.use(bodyParser.json());
const cors = require('cors');
server.use(cors());


//locationdata

const userRouter = require('./../router/user');
const usersRouter = require('./../router/users');
const postRouter = require('./../router/post');
const countryRouter = require('./../router/country');
const statesRouter = require('./../router/states');
const cityRouter = require('./../router/city');
// console.log("enter")
 let { protocal, host, port, name,username,password } = config.app.db;
//  let db= process.env.MONGODB_URL ||`mongodb+srv://admin:admin123@cluster0.qcrci.mongodb.net/examplecontact?retryWrites=true&w=majority`;
 let db= process.env.MONGODB_URL ||`mongodb+srv://admin:admin123@hoffen.cnl9m8a.mongodb.net/HoffenretryWrites=true&w=majority`;

console.log('connected to the database',db);


	
mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    },function(error){
        if(error)
        {
        console.log(error);
  }
        else
        {
        console.log('connected to the database',db);
        }
	});
	//locationdata

server.use("/user", userRouter);
server.use("/users", usersRouter);
server.use("/post", postRouter);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// server.use("/country", countryRouter);
// server.use("/states", statesRouter);
// server.use("/citys", cityRouter);
module.exports= server;