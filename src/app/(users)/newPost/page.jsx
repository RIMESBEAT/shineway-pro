'use client'
import axios from 'axios'
import React, { useState } from 'react'
// import { CldUploadWidget } from 'next-cloudinary';
import { cloudName, databaseUri } from '../../../../env';

const NewUpload = () => {

    const [img, setImg] = useState(null)
    const [vid, setvid] = useState(null)
    const [loading, setLoading] = useState(false)

 const uploadFile = async (type)=>{
  const data = new FormData()
  data.append('file', type === "image" ? img : vid)
  data.append('upload_preset', type === 'image' ? 'unsigned_image' : 'unsigned_video')

  try{
   
    let resourceType = type === 'image'? 'image' : 'video'
    let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`

    const res = await axios.post(api, data)
    const {secure_url} = res.data
    console.log(secure_url);
    return secure_url
  }catch(err){
console.log(err);
  }
 }

     


    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            setLoading(true)

            const imgUrl = await uploadFile('image')


            const vidUrl = await uploadFile('video')


            // send backend mongo api request
            await axios.post(`http://localhost:3000/api/product`, {imgUrl})
setImg(null)
setvid(null)
console.log('successfully uploaded');
        }catch(err){
            console.error(err);
        }
    }
    
  return (
    <div>
        
{/* <CldUploadWidget uploadPreset="unsigned_image">
  {({ open }) => {
    function handleOnClick(e) {
      e.preventDefault();
      open();
    }
    return (
      <button className="button" onClick={handleOnClick}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>  */}
        <form action="" onSubmit={handleSubmit}>
            <input type="file" accept='image/' id='image' onChange={(e)=>setImg((prev)=> e.target.files[0])}/>
            <input type="file" accept='video/' id='video' onChange={(e)=>setvid((prev)=> e.target.files[0])}/>

            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default NewUpload