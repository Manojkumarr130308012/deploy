const statesSchema = require('./../model/states');
const errorHandler = require('./../utils/error.handler');
const stateJson = require('./../data/states');

class statesController {


    async add(farm){
		try{
			let response = await statesSchema.create(farm);
			return { status: "success",   msg:"State Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
    async addMany(){
		try{
			let response = await statesSchema.insertMany(stateJson);
			return { status: "success",   msg:"State Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async fetch(){
		try{
			let response = await statesSchema.find({});
			let count=Object.keys(response).length;
			return {
				response: response,
				count
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetchdata(id){
		try{
			let response = await statesSchema.find({'_id':id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async fetchcountrydata(id){
		try{
			let response = await statesSchema.find({'country_stateid':id});
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
			let response = await statesSchema.deleteOne({_id: id});
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
            let response = await statesSchema.update({_id: id}, body);
            return { status: "success", msg:"country Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }
	async aggregation() {
        try {
			let response = await statesSchema.aggregate([
			   {
				   $lookup:
				   {
					   from: "countries",
					   localField: "country_stateid",
					   foreignField: "countryid",
					   as: "stated"
				   }
			   }			 
		  ]);
		  return response;
		  
        } catch (error) {
            return {
                status: "error",
                error: errorHandler.parseMongoError(error)
            };
        }
	}
	
}

       

module.exports=new statesController();