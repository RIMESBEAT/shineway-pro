import Image from "next/image"
import { urlFor } from "../../../sanity/sanity-utils"

const RichTextComponent = {
    types: {
      image: ({value}) => <Image src={urlFor(value).url()} alt={value} width={750} height={300} quality={60} className='mx-auto my-4 object-cover w-auto h-auto' />,
     
    },

    marks: {
        // Ex. 1: custom renderer for the em / italics decorator
        // em: ({children}) => <em className=" text-red-600 font-semibold">{children}</em>,
    
        // Ex. 2: rendering a custom `link` annotation
        link: ({value, children}) => {
          const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
          return (
            <a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'}>
              {children}
            </a>
          )
        },
      },
      block: {
        // Ex. 1: customizing common block types
        h1: ({children}) => <h1 className="text-xl my-4  font-extrabold">{children}</h1>,
        h2: ({children}) => <h2 className="my-4 ">{children}</h2>,
        h3: ({children}) => <h3 className="my-4 ">{children}</h3>,
        h4: ({children}) => <h4 className="my-4 ">{children}</h4>,
        h5: ({children}) => <h5 className="my-4 ">{children}</h5>,
        normal: ({children}) => <p className=" ">{children}</p>,
        blockquote: ({children}) => <blockquote className=" pl-3 border-l-4 border-l-blue-800 my-4 ">
          {children}
          
          </blockquote>,
    
        // Ex. 2: rendering custom styles
        customHeading: ({children}) => (
          <h2 className="text-lg text-primary text-purple-700">{children}</h2>
        ),
      },
      list: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <ul className=" padding__x">{children}</ul>,
        // number: ({children}) => <ol className="mt-lg">{children}</ol>,
       
        // Ex. 2: rendering custom lists
        checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
      },
      listItem: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <li style={{ listStyleType: 'disc' }} >{children}</li>,

  // Ex. 2: rendering custom list items
        checkmarks: ({children}) => <li className="m-auto padding__x">✅ {children}</li>,

  // Ex. 3: custom style for numbered lists
        number: ({children}) => <li style={{ listStyleType: 'decimal' }} className="mx-auto padding__x">{children}</li>,
      },
    }
    
export default RichTextComponent