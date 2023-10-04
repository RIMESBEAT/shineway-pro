import { connectMongoDB } from "@/lib/mongodb"
import Product from "@/model/product"
import { NextResponse } from "next/server"

// export const POST = async (request)=>{
//    try{

//     const {name, description, advisory, prescription, dosage, benefit,imgUrl } = await request.json()

//     await connectMongoDB()
//     await Product.create({name, description, advisory, prescription, dosage, benefit, imgUrl})
//     return NextResponse.json({message: "Posted Successfully"}, {status: 201})
//    }catch(err){
// return Error({message: "error occured", err})
//    }
// }    

export const POST = async (request)=>{
    const {name, description, advisory, prescription, dosage, benefit,imgUrl, category, productStory } = await request.json()
    await connectMongoDB()
  await Product.create({name, description, advisory, prescription, dosage, benefit, imgUrl, category, productStory})
  return NextResponse.json({message: "Posted Successfully"}, {status: 201})
  } 


// export const POST = async (request) => {
//     try {
//       const { name, description, advisory, prescription, dosage, benefit } = await request.json();
  
//       // Connect to MongoDB
//       await connectMongoDB();
  
//       // Create product in the database
//      await Product.create({ name, description, advisory, prescription, dosage, benefit });
  
//       // Close the MongoDB connection if necessary
  
//       // Return a success response
//       return NextResponse.json({ message: "Posted Successfully" }, { status: 200 });
//     } catch (err) {
//       // Return an error response
//       return NextResponse.error({ message: "Error occurred", error: err });
//     }
//   };

export const GET = async ()=>{

    try{
        await connectMongoDB()
    const products = await Product.find()
    return NextResponse.json({products})
    }catch(err){
        return Error({message: "Error Occure While Fetching data", err}, {status: 500})
    }
    
}

export const DELETE = async (request)=>{
    try{
        const id = request.nextUrl.searchParams.get("id")
        await connectMongoDB()
        await Product.findByIdAndDelete(id)
    return NextResponse.json({message: "Deleted Successfully"}, {status: 201})

    }catch(err){
        return Error({message: "Error Occure While Deleting data", err}, {status: 500})

    }
}


