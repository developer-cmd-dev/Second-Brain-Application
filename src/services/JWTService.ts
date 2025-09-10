
import jwt, {JwtPayload} from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()
class JWTService{
    private readonly key:string;
    constructor(key:string) {
    this.key=key;
    console.log(key," this is key")
    }

   public generateToken(payload:string):string{

       return jwt.sign(
           {data:payload},
            this.key,
            {expiresIn: '1h'}
        )
    }

   public verifyToken(token:string):string|JwtPayload{
       return jwt.verify(token, this.key)
    }


}

// @ts-ignore
export  const jwtService = new JWTService(process.env.JWT_SECRET);