const TextAreaComponent = ({placeholder, type, name, value, onChange }) => {
  return (
    <div>
         <div className="my-4  w-full bg-white dark:bg-gray-900 drop-shadow-md rounded-md">
      <textarea className='bg-transparent dark:text-white w-full border-none outline-none p-2' type={type} placeholder={placeholder}  name={name} id="" value={value}  onChange={onChange} />
    </div>
    </div>
  )
}

export default TextAreaComponent
