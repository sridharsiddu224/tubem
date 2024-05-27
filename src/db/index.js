import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const conectinDB =  async()=>{
    try {
        
        const mongoosecontection = await mongoose.connect(`${process.env.MOGODB_URI}/${DB_NAME}`)
        console.log("mongoose contected =>", mongoosecontection.connection.host);
        console.log("mongoose contected =>", mongoosecontection.connection.name);
        
    } catch (error) {
        console.log(error);
    }
}

export default conectinDB;  