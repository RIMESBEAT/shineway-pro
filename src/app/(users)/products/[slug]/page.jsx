import { groq } from "next-sanity"
import { client } from "../../../../../env"
import Image from "next/image"




const ProductDetails = async ({params: {slug}}) => {

  const query = groq`*[_type == 'product' && slug.current == $slug ][0]{
    name,
    "imgUrl":imgUrl.asset->url,
    functions, 
    slug,
    price,
    advisory,
    dosage,
    prescription,
    ingredient,
    product_story,
    _id,
    _createdAt
  }`

  const product = await client.fetch(query, {slug})

  console.log(product);
  return (
    <main className="padding__x my-8">
    <h1 className="text-3xl  uppercase font-bold">{product.name}</h1>
   <p className="my-4">{product.product_story}</p> 
    <div className=" block md:flex items-start gap-8 bg-transparent shadow-lg py-4 px-4 rounded-md ">
      <div className="flex-1 relative">
      <Image width={750} height={250} src={product.imgUrl}  alt={product.name} className="rounded-lg mb-10"/>
      
      {/* <p className="absolute top-6 right-6 bg-blue-900 p-1 px-2 text-white  rounded-sm font-bold">N{product.price.toLocaleString()}</p> */}
      
      {
        product.ingredient && (
          <div className="">
  <p className="pb-2 text-xl font-medium">Ingredient</p>
       <p className="capitalize">{product.ingredient.toLowerCase()}</p>

          </div>
        )
      }
    
      </div>
      <div className="flex-1 ">
      <div className="">
       
        <p className="  py-2 text-xl font-medium">Functions </p>
         <div className="">
         
          {
            product.functions?.map((item)=>(
              <div className="flex items-start gap-2 my-1" key={item._key} >
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> */}
                <h1 className="font-extrabold">.</h1>
                <p className="capitalize"> {item.function}</p>
              </div>
            ))
          }
         </div>
          </div>
        <div className=" ">
          
         

          
<div className="">
  {
product.dosage && (
  <div className="">


<p className="py-2  text-xl font-medium">Dosage</p>
          <p>{product.dosage}</p>
  </div>
)
  }
</div>
<div className="">
  {
    product.prescription && (
      <div className="">
<p className="py-2  text-xl font-medium">Prescription</p>
<p>{product.prescription}</p>

      </div>
    )
  }
</div>

       <div className="">
        
       {
           product.advisory && (
              <div className="">
                <p className="py-2  text-xl font-medium">Warning</p>
                <p className="bg-red-500 p-2 rounded-sm">{product.advisory}</p>
              </div>
            )
          }
       </div>

        </div>
      </div>
    </div>
   
    
    </main>
  )
}

export default ProductDetails
