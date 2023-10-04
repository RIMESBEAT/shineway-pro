'use client'
import React, { useState } from 'react'
import InputComponent from '../inputComponent/InputComponent'
import Image from 'next/image'

const ImageUploadComponent = ({placeholder, type, name, value, onChange }) => {
    const [file, setFile] =useState()
    
// const handleImageUplaod = async(e)=>{
// const file = e.target.file
// const newFile = file.filter(file =>{
//     if(file.size< 1024 * 1024 && file.type.statsWith('image/')){
//         return file
//     }
// })

// console.log(file, newFile);
// }

const handleImageUpload = async (e) => {
    const selectedFile = e.target.files[0]; // Use e.target.files to access selected files

    if (selectedFile && selectedFile.size < 1024 * 1024 && selectedFile.type.startsWith('image/')) {
      // Check if a file is selected, its size is less than 1MB, and it has an image type
      setFile(selectedFile); // Set the selected file to the file state
    } else {
      // Handle invalid file selection
      alert('Please select a valid image file (less than 1MB).');
    }
  };

  return (
    <div>
        {/* <InputComponent  type="file" placeholder="Upload Image"   
        accept="image/"
        onChange={handleImageUpload} />
 {file && (
        <div>
          <p>Selected Image:</p>
          <Image src={URL.createObjectURL(file)} alt="Selected" width={200} height={200} />
        </div>
      )} */}
    </div>
  )
}

export default ImageUploadComponent