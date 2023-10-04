// import { NextResponse } from "next/server";
// import prisma from "../../../../prisma";

// async function main (){
//     try{
//         await prisma.$connect()
//     }catch (err) {
// return Error ('Database connection Unsuccessful')
//     } finally{
//         await prisma.$disconnect()
//     }
// }

// export async function POST(request){

//   try{
//     const {title, body} = await request.json()
//     await main()
//     await  prisma.post.create({title, body})
  
//     return NextResponse.json({message: "successfull"})
//   }catch(err){
// return Error({message: "error occured", err})
//   }
  
// }

import { connectMongoDB } from "@/lib/mongodb"
import Product from "@/model/product"
import { NextResponse } from "next/server"

export const POST = async (request)=>{
  const {name, description, advisory, prescription, dosage, benefit,imgUrl } = await request.json()
  await connectMongoDB()
await Product.create({name, description, advisory, prescription, dosage, benefit, imgUrl})
return NextResponse.json({message: "Posted Successfully"}, {status: 201})
}    
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
