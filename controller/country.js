const countrySchema = require('./../model/country');
const countryJson = require('./../data/countries');
const errorHandler = require('./../utils/error.handler');


class CountryController {


    async add(farm){
		try{
			let response = await countrySchema.create(farm);
			return { status: "success",   msg:"country Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async addMany(){
		try{
			let response = await countrySchema.insertMany(countryJson);
			return { status: "success",   msg:"countrys Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async fetch(){
		try{
			let response = await countrySchema.find({});
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
			let response = await countrySchema.find({'_id':id});
			return  response;
			
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}


	async fetchcountrydata(id){
		try{
			let response = await countrySchema.find({'country_stateid':id});
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
			let response = await countrySchema.deleteOne({_id: id});
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
            let response = await countrySchema.update({_id: id}, body);
            return { status: "success", msg:"country Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }

	
}

       

module.exports=new CountryController();