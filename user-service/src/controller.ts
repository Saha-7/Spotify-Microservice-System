import type { Request, Response } from "express";

export const registerUser = async(req:Request, res:Response)=>{
    try{
        
    }catch(error){
        res.status(400).json({
            message: ""
        })
    }
}