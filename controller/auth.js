const usersSchema = require('./../model/users');
const errorHandler = require('./../utils/error.handler');
const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt");
const users = require('./../model/users');


class AuthController {

 async register(req){
        try {
            //generate new password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
            //create new user
            const newUser = new users({
              username: req.body.username,
              email: req.body.email,
              password: hashedPassword,
            });
        
            //save user and respond
            const user = await newUser.save();
            return {
                status: 'success',
                msg: 'User created'
            }        
          } catch (err) {
            return {
                status: 'error',
                msg: 'User creation failed'
            }
          }

    }

    async login(req){

        try {
            const user = await User.findOne({ email: req.body.email });
            !user && res.status(404).json("user not found");
        
            const validPassword = await bcrypt.compare(req.body.password, user.password)
            !validPassword && res.status(400).json("wrong password")
        
            return {
                status: "1",
                msg: "Login Sucessfully",
                user
            };
          } catch (err) {
            return {
                status: '0',
                msg: 'username or password invalid'
            }
          }

    }

	

    async mail(mailstring,subject,text){
        try{
		
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'manojkumarr21@gmail.com',
                  pass: '130308012'
                }
              });
    
    
              const mailOptions = {
                from: 'manojkumarr21@gmail.com',
                to: mailstring,
                subject: subject,
                text: text
              };
    
    
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    return error;
                } else {
                  console.log('Email sent: ' + info.response);
                  return info.response;
                }
              });
			
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}








	}



	
}

       

module.exports=new AuthController();