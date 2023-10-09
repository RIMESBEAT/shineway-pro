import category from './schemas/category'
import complan from './schemas/complan'
import ourTeam from './schemas/ourTeam'
import post from './schemas/post'
import postCategory from './schemas/postCategory'
import product from './schemas/product'

export const schema = {
  types: [post, product, complan, ourTeam, category, postCategory],
}

// export default createSchema({
//   name: 'default',
//   types: schemaTypes.concat([product, ]),
// });