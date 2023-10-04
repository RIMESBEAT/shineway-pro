'use client'
import InputComponent from '@/components/inputComponent/InputComponent'
import TextAreaComponent from '@/components/inputComponent/TextAreaComponent'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { cloudName, databaseUri } from '../../../../../env'
import Select from 'react-select'
import Option from 'react-select'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'



const options = [
  { value: 'beverages', label: 'beverages' },
  { value: 'energy', label: 'energy' },
  { value: 'herbal', label: 'herbal' },
  { value: 'beauty', label: 'beauty' },
];

const categories = ["beverage", "energy", "herbal", "beauty"]


const PostProduct = () => {
  const router = useRouter()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [advisory, setAdvisory] = useState("")
  const [prescription, setPrescription] = useState("")
  const [dosage, setDosage] = useState("")
  const [benefitText, setBenefitText] = useState("")
  const [benefit, setBenefit] = useState([])
  const [img, setImg] = useState(null)
  const [productStory, setProductStory] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  // State to store the selected category
  const [category, setCategory] = useState('');

  // Handler function to update the selected category
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleBenefitChange =(e)=>{
setBenefitText(e.target.value)
  }

  const handleAddBenefit =()=>{
    // benefitText.trim()
    // setBenefit([...benefit, benefitText.trim()])
    // setBenefitText('')
    if (benefitText.trim() !== '') {
      setBenefit([...benefit, benefitText]);
      setBenefitText('');
    }
  }

   const handleRemoveBenefit = (index) => {
    const updatedBenefit = [...benefit];
    updatedBenefit.splice(index, 1);
    setBenefit(updatedBenefit);
  };

    const handleFileChange = (e) => {
      setImg(e.target.files[0]);
    };

    const handleNameChange = (e) => {
      setName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };



    const uploadFile = async (type)=>{
      const data = new FormData()
      data.append('file', type === "image" ? img : null)
      data.append('upload_preset', type === 'image' ? 'unsigned_image' : null)

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

     
    const handleSubmit  =async (e)=>{
        e.preventDefault()
        setIsLoading(true)
        if(!name || !description){
        
        }

  const imgUrl = await uploadFile('image')
      
          const response = await fetch("http://localhost:3000/api/product", {
        method: "POST",
        headers: {
          "content-type": "application/json"
  },
  body: JSON.stringify({name, description, advisory, prescription, dosage, benefit, imgUrl, category})
          })
          if(response.ok) {

  // router.push('/')
  setIsLoading(false)
  router.refresh()

          }else{
            throw new Error('Failed to Post')
          }
        
    }

  return (
    <main>
      <h1>
        PostProduct
        </h1>

<div className="">
  <form onSubmit={handleSubmit}>
    <div className="mx-auto max-w-md bg-gray-300 rounded-md shadow-xl px-4 py-10 backdrop-blur-md">

    {/* <input type="file" accept="image/*" onChange={handleFileChange} /> */}
<div className="block sm:flex justify-center gap-4">
  <InputComponent placeholder="Product Name" name={name} value={name} onChange={(e)=>setName(e.target.value)}  />
  <InputComponent placeholder="Dosage" name={dosage} value={dosage} onChange={(e)=>setDosage(e.target.value)}/>
</div>
<div className="">
<TextAreaComponent placeholder="Description" name={description} value={description} onChange={(e)=>setDescription(e.target.value)}/>
</div>

<div className=" ">
<select  id="" className=' w-full  bg-white dark:bg-gray-900 border-none rounded-lg outline-none p-2' onChange={(e)=>setCategory(e.target.value)}>
  <option value="" className=' '> Select Category</option>
     {categories.map((category) => (
          <option className='' key={category} value={category}>
            {category}
          </option>
        ))}
</select>  
</div>

<div className="">
  <div className="flex items-center gap-4">
<div className="flex-1  w-full">
 <InputComponent placeholder="Benefit" name={benefit} value={benefitText} onChange={handleBenefitChange}/>
</div>
    <PlusCircleIcon onClick={handleAddBenefit}  className=' w-10 text-black font-bold rounded-sm capitalize'/>
  </div>
 {
  benefit && benefit.map((item, index)=>(
    <div key={index} className="flex justify-between items-center">
      <ul >{item}</ul>
      <MinusCircleIcon className='w-6 text-red-600' onClick={handleRemoveBenefit} />
    </div>
  ))
 }
</div>
<div className="">
 <InputComponent placeholder="Product Story" name={productStory} value={productStory} onChange={(e)=>setProductStory(e.target.value)}/>
</div>
<div className="">
 <InputComponent placeholder="Prescription" name={prescription} value={prescription} onChange={(e)=>setPrescription(e.target.value)}/>
</div>
<div className="">
 <InputComponent placeholder="Advisory" name={advisory} value={advisory} onChange={(e)=>setAdvisory(e.target.value)}/>
</div>

{img && (
        <div>
          <p>Selected Image:</p>
          <Image src={URL.createObjectURL(img)} alt="Selected" width={200} height={200} />
        </div>
      )}

<div className="">
 <InputComponent  accept="image/" type="file" name={img}  onChange={handleFileChange}/>
</div>

<button className='bg-black text-white font-bold px-4  py-2 rounded-sm uppercase ' type='submit'>submit</button>

{
  isLoading && (
    <div className="">
      LOADING....
    </div>
  )
}
    </div>
  </form>
</div>
    </main>
  )
}

export default PostProduct