import Image from "next/image"
import { urlFor } from "../../../sanity/sanity-utils"

// const RichTextComponent = {
//     types: {
//       image: ({value}) => <Image src={urlFor(value).url()} alt={value} width={750} height={300} quality={60} className='mx-auto my-4 object-cover w-auto h-auto' />,
     
//     },

//     marks: {
//         // Ex. 1: custom renderer for the em / italics decorator
//         // em: ({children}) => <em className=" text-red-600 font-semibold">{children}</em>,
    
//         // Ex. 2: rendering a custom `link` annotation
//         link: ({value, children}) => {
//           const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
//           return (
//             <a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'}>
//               {children}
//             </a>
//           )
//         },
//       },
//       block: {
//         // Ex. 1: customizing common block types
//         h1: ({children}) => <h1 className="text-xl my-4  font-extrabold">{children}</h1>,
//         h2: ({children}) => <h2 className="my-4 ">{children}</h2>,
//         h3: ({children}) => <h3 className="my-4 ">{children}</h3>,
//         h4: ({children}) => <h4 className="my-4 ">{children}</h4>,
//         h5: ({children}) => <h5 className="my-4 ">{children}</h5>,
//         normal: ({children}) => <p className=" ">{children}</p>,
//         blockquote: ({children}) => <blockquote className=" pl-3 border-l-4 border-l-blue-800 my-4 ">
//           {children}
          
//           </blockquote>,
    
//         // Ex. 2: rendering custom styles
//         customHeading: ({children}) => (
//           <h2 className="text-lg text-primary text-purple-700">{children}</h2>
//         ),
//       },
//       list: {
//         // Ex. 1: customizing common list types
//         bullet: ({children}) => <ul className=" ">{children}</ul>,
//         // number: ({children}) => <ol className="mt-lg">{children}</ol>,
       
//         // Ex. 2: rendering custom lists
//         checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
//       },
//       listItem: {
//         // Ex. 1: customizing common list types
//         bullet: ({children}) => <li style={{ listStyleType: 'disc' }} >{children}</li>,

//   // Ex. 2: rendering custom list items
//         checkmarks: ({children}) => <li className="m-auto ">✅ {children}</li>,

//   // Ex. 3: custom style for numbered lists
//         number: ({children}) => <li style={{ listStyleType: 'decimal' }} className="mx-auto my-3">{children}</li>,
//       },
//     }
    
// export default RichTextComponent




const RichTextComponent = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value).url()}
        alt={value}
        width={600}
        height={300}
        quality={60}
        className="mx-auto my-4 object-cover w-auto h-auto"
      />
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' && 'noindex nofollow'}
          className="text-blue-500 underline"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-extrabold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl my-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl my-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg my-4">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg my-4">{children}</h5>,
    normal: ({ children }) => <p className="text-base leading-7 my-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="pl-3 border-l-4 border-l-blue-800 my-4 italic text-gray-600">
        {children}
      </blockquote>
    ),
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700 font-semibold my-4">{children}</h2>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc my-4 ml-4">{children}</ul>,
    checkmarks: ({ children }) => <ul className="list-inside list-decimal m-auto text-lg">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    checkmarks: ({ children }) => <li className="mb-2 flex items-center ml-4"><span className="mr-2">✅</span>{children}</li>,
    number: ({ children }) => <li className="mb-2 list-decimal ml-4">{children}</li>,
  },
};

export default RichTextComponent;