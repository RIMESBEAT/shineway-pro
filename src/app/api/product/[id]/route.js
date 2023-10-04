import { connectMongoDB } from "@/lib/mongodb"
import Product from "@/model/product"
import { NextResponse } from "next/server"


export const PUT = async(request, {params})=>{
    try{ 
    const {id} = params
    const {newName: name, newDescription: description } = await request.json()
    await connectMongoDB()
    await Product.findByIdAndUpdate(id, {name, description})
    return NextResponse.json({message: "Updated Successfully"}, {status: 201})

    }catch(err){
        return Error({message: "Error Occure While Updating data", err}, {status: 500})
    }
}

export const GET =async(request, {params})=>{
    try{
        const {id} = params
    await connectMongoDB()
    const product = await Product.findOne({_id: id})
    return NextResponse.json({product}, {status: 200})
    }catch(err){
        return Error({message: "Error Occured While Updating data", err}, {status: 500})
    }
}