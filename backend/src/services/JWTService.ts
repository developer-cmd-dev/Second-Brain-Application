
import jwt, {JwtPayload} from "jsonwebtoken";
import dotenv from "dotenv";
import {CustomError} from "../Exception/CustomError.js";
dotenv.config()
class JWTService{
    private readonly key:string;
    constructor(key:string) {
    this.key=key;
    }

   public generateToken(payload:string):string{

        try {
            return jwt.sign(
                {data:payload},
                this.key,
                {expiresIn: '1h'}
            )
        }catch (e) {
            // @ts-ignore
            throw new CustomError(e.message,502)
        }
    }

   public verifyToken(token:string):string|JwtPayload{
       return jwt.verify(token, this.key);
    }


}

// @ts-ignore
export  const jwtService = new JWTService(process.env.JWT_SECRET);