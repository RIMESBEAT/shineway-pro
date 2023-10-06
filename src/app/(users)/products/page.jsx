
import ProductCard from "@/components/product card/ProductCard";
import { client } from "../../../../env";
import Link from "next/link";
import Image from "next/image";
import BgImage from "../../../../public/princess.gif"

const ProductsPage = async () => {

  const query = '*[_type == "category"]{title, "products": *[_type == "product" && references(^._id)]{name, short_description, "imgUrl":imgUrl.asset->url, slug,}}';
  const categories = await client.fetch(query);

  return (
    <main className="">
      {/* <h1>Products</h1> */}
<div className="">

  <Image src={BgImage} alt="Background Image" />
</div>
      <section className=" padding__x">

      <div className="py-10 md:py-20 ">


              {categories && categories.map((category) => (
        <div key={category._id}>
          <h2 className={`${
  category.title === "beauty" ? "bg-pink-500/30" : ""
} ${
  category.title === "energy" ? "bg-red-500/30" : ""
} ${
  category.title === "herbal" ? "bg-green-500/30" : ""
} ${
  category.title === "bevarage" ? "bg-blue-500/30 " : ""
} mt-20 mb-4 uppercase  font-extrabold text-2xl p-2` }>{category.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.products.map((product) => (
              <Link href={`/products/${ product.slug.current}`} key={product._id} >
                <ProductCard name={product.name} imgUrl={product.imgUrl} description={product.short_description} />
              </Link>
            ))}
          </div>
        </div>
      ))}
      </div>

      </section>
    </main>
  );
};


export default ProductsPage;
