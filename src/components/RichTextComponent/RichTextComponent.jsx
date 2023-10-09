import Image from "next/image"
import { urlFor } from "../../../sanity/sanity-utils"

const RichTextComponent = {
    types: {
      image: ({value}) => <Image src={urlFor(value).url()} alt={value.title} width={500} height={300} className='mx-auto my-4 object-cover' />,
     
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
        h1: ({children}) => <h1 className="text-2xl font-extrabold">{children}</h1>,
        h2: ({children}) => <h2 className="text-2xl ">{children}</h2>,
        normal: ({children}) => <p className=" ">{children}</p>,
        blockquote: ({children}) => <blockquote className=" pl-3 border-l-4 border-l-blue-800 ">
          {children}
          
          </blockquote>,
    
        // Ex. 2: rendering custom styles
        customHeading: ({children}) => (
          <h2 className="text-lg text-primary text-purple-700">{children}</h2>
        ),
      },
      list: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
        // number: ({children}) => <ol className="mt-lg">{children}</ol>,
    
        // Ex. 2: rendering custom lists
        checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
      },
      listItem: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <li style={{listStyleType: 'disclosure-closed'}}>{children}</li>,
    
        // Ex. 2: rendering custom list items
        checkmarks: ({children}) => <li>✅ {children}</li>,
      },
    }
    
export default RichTextComponent