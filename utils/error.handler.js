class ErrorHandler{
	parseMongoError(error){		

		
		let errorMsg = 'Something went wrong';

		switch(error.code){			
			case 11000:
				errorMsg = 'Data already exist';
				break;	
				default:
					errorMsg=`${error.code} ~ ${error.errorMsg}`;
		}


		switch(error.name){
			case 'MongoError':
					errorMsg = error.name;
					break;
			case 'ValidationError':
					errorMsg = error.name;
					break;
					default: errorMsg = error.name;

		}
		//console.log(error.code);

		return errorMsg;		
	}
}

module.exports = new ErrorHandler();