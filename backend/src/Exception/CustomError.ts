export class CustomError extends Error{

    statusCode:number;
    errorData:object|null
    constructor(message:string,statusCode:number,errorData?:object) {
        super(message);
        this.statusCode = statusCode;
        this.errorData = errorData??null;
        Object.setPrototypeOf(this, CustomError.prototype);
    }

}