const locationSchema = require('../model/location_add');
const errorHandler = require('../utils/error.handler');


class LocationController {


    async add(farm){
		try{
			let response = await locationSchema.create(farm);
			return { status: "success",   msg:"location Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetch(){
		try{
			let response = await locationSchema.find({});
			let count=Object.keys(response).length;
			return response;
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetchdata(id){
		try{
			let response = await locationSchema.find({'_id':id});
			return  response;
			
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}


	async fetchlocationdata(id){
		try{
			let response = await locationSchema.find({'country_stateid':id});
			return  response;
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async delete(id){
		try{
			let response = await locationSchema.deleteOne({_id: id});
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
            let response = await locationSchema.update({_id: id}, body);
            return { status: "success", msg:"location Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }

	
}

       

module.exports=new LocationController();