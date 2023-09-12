import { groq } from "next-sanity"
import { client } from "../../../../../env"
import Image from "next/image"




const ProductDetails = async ({params: {slug}}) => {

  const query = groq`*[_type == 'product' && slug.current == $slug ][0]{
    name,
    "imgUrl":imgUrl.asset->url,
    description, 
    slug,
    price,
    advisory,
    dosage,
    prescription,
    _id,
    _createdAt
  }`

  const post = await client.fetch(query, {slug})

  console.log(post);
  return (
    <main className="padding__x">
    
    <div className=" flex items-center gap-8 ">
      <div className="flex-1">
        <Image width={750} height={250} src={post.imgUrl}  alt={post.name}/>
      </div>
      <div className="flex-1">
        <h1>Product Description</h1>
        <div className="">
          <h2>{post.name}</h2>
         

          <div className="">

          <p>{post.price}</p>
          </div>
<div className="">

          <p>{post.dosage}</p>
</div>

<p>{post.prescription}</p>
       <div className="">
        
       {
            post.advisory && (
              <div className="">
                <p>Warning</p>
                <p className="bg-red-500">{post.advisory}</p>
              </div>
            )
          }
       </div>
        </div>
      </div>
    </div>
    <div className="">
<p>Functions </p>
          <p>{post.description}</p>
          </div>
    
    </main>
  )
}

export default ProductDetails
