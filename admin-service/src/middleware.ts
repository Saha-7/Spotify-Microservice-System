import { Request, Response, NextFunction } from "express";
import axios from "axios";
import dotenv from 'dotenv'


dotenv.config()


interface IUser {
    _id: string,
    name: string,
    email: string,
    password: string,
    role: string,
    playlist: string[]
}

interface AuthenticatedRequest extends Request{
    user?: IUser | null;
}


export const isAuth = async(req:AuthenticatedRequest, res:Response, NextFunction): Promise<void> =>{
    try{
        const token = req.headers.token as string
        if(!token){
            res.status(403).json({
            message: "Please Login",
        })
        return
        }

        const {data}= await axios.get(`${process.env.USER_SERVICE_URL}/api/v1/user/my-profile`, {
            headers: { token }
        })

        req.user = data

    }catch(error){
        res.status(403).json({
            message: "Please Login",
        })
    }
}