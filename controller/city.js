const citySchema = require('./../model/city');
const errorHandler = require('./../utils/error.handler');
const citiesJson = require('./../data/cities');

class CityController {


    async add(farm){
		try{
			let response = await citySchema.create(farm);
			return { status: "success",   msg:"city Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
    async addMany(){
		try{
			let response = await citySchema.insertMany(citiesJson);
			return { status: "success",   msg:"city Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async fetch(){
		try{
			let response = await citySchema.find({});
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
			let response = await citySchema.find({'_id':id});
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
			let response = await citySchema.deleteOne({_id: id});
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
            let response = await citySchema.update({_id: id}, body);
            return { status: "success", msg:"country Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }
	async aggregation() {
        try {
          
			let response = await citySchema.aggregate([
				{
					$match: {
						state_cityid:"2"
					}
				},
			   {
				   $lookup:
				   {
					   from: "states",
					   localField: "state_cityid",
					   foreignField: "stateid",
					   as: "cityd"
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

       

module.exports=new CityController();