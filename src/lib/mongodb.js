import mongoose from "mongoose";
import { databaseUri } from "../../env";

export const connectMongoDB = async()=>{
    try{
       await mongoose.connect(databaseUri)
   console.log("connected to mongoDB");
        }catch(err){
console.log({messsage: "error from mongo"}, err); 
    }
}  

// import mongoose from 'mongoose';

// async function connectDb() {
//   if (mongoose.connections[0].readyState) {
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.DATABASE_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     });
//     console.log('MongoDB Connected');
//   } catch (error) {
//     console.error(error);
//   }
// }

// export default connectDb;