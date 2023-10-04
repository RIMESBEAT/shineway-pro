import mongoose, {Schema} from "mongoose";
import { sluggerPlugin } from "mongoose-slugger-plugin";
import slugify from "slugify";

// const productSchema = new Schema({
//     name: String,
//     description: String

// },
// {
//     timestamps:true
// }

// )

const productSchema = new Schema({
    name:String,
    benefit: Array,
    description: String,
    price: Number,
    slug: String,
    imgUrl:String,
    prescription:String,
    advisory:String,
    category: String

  
  }, 
  {
    timestamps: true
});

productSchema.index({ name: 1, slug: 1 }, { name: 'name_slug', unique: true });

productSchema.plugin(sluggerPlugin, {
  slugPath: 'slug',
  generateFrom: ["name"],
  maxLength: 30,
  index: 'name_slug'
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema)
export default Product 