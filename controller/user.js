const userSchema = require('./../model/user');
const errorHandler = require('./../utils/error.handler');
const nodemailer = require('nodemailer');

class UserController {

  
    async register(newGender){
        try{
            await userSchema.create(newGender);
   return {
                status: 'success',
                msg: 'User created'
            }
        } catch(err){
            return {
                status: 'error',
                msg: 'User creation failed'
            }
        }
    }

    async login(responce){
        let username=responce.phone;
        let password=responce.password;
        try{
            let user = await userSchema.findOne({
                phone: username,
                password: password,
            });

            if(!user){
                throw new Error('invalid creds');
            }

            return {
                status: "1",
                msg: "Login Sucessfully",
                user
            };

        } catch(error){
            return {
                status: '0',
                msg: 'username or password invalid'
            }
        }
    }

	

    async login1(username,password){
       
        try{
            let user = await userSchema.findOne({
                username: username,
                password: password,
            });

            if(!user){
                throw new Error('invalid creds');
            }

            return {
                status: "1",
                msg: "Login Sucessfully",
                user
            };

        } catch(error){
            return {
                status: '0',
                msg: 'username or password invalid'
            }
        }
    }



    async add(farm){
		try{
			let response = await userSchema.create(farm);
			return { status: "success",   msg:"User Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(body){
		try{

            
			let response = await userSchema.find({});
			let count=Object.keys(response).length;
			return {
				response: response,
				count:body
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
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

	async fetchdata(id){
		try{
			let response = await userSchema.find({'_id':id});
			return response;
			
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async delete(id){
		try{
			let response = await userSchema.deleteOne({_id: id});
			return {
				status: "success",
				response: response
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async update(id, body) {

        try {
            let response = await userSchema.update({_id: id}, body);
            return { status: "success", msg:"User Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }

	
}

       

module.exports=new UserController();