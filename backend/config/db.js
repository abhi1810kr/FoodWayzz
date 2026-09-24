import mongoose from 'mongoose'
import dns from 'dns';
import dotenv from 'dotenv';
dotenv.config();

dns.setServers(["8.8.8.8", "8.8.4.4"]);


export const connectDB = async()=>{
    
    const MONGO_URI = process.env.MONGO_URL;

    await mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log("mongodn connection successfully");
        
    }).
    catch((err)=>{
            console.log("Error : ", err);
            
    })
}