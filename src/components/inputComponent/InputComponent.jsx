import React from 'react'

const InputComponent = ({placeholder, type, name, value, onChange, accept }) => {
  return (
    <div>
         <div className="my-4  w-full bg-white dark:bg-gray-900 drop-shadow-md rounded-md">
      <input className='bg-transparent w-full border-none outline-none p-2' accept={accept}  type={type} placeholder={placeholder}  name={name} id="" value={value}  onChange={onChange} />
    </div>
    </div>
  )
}

export default InputComponent
