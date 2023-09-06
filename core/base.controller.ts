export class BaseController{
    standardResponse(data, message="default", status ="default"){
        return{
            data: data,
            message: message,
            status: status,
        }
    }
}