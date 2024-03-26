import { getProductsByCategory } from "@/lib/products"
import Link from "next/link"

const CategoryProductList = ({ categoryName }) => {
  const products = getProductsByCategory(categoryName)
  return (
    <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
      {products.map(product =>
        <div key={product.id} >
          <div
            class="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform"
            style={{ backgroundImage: `url(${product.thumbnail})` }}
          >
          </div>
          <h2 class="text-sm lg:text-base mt-2">
            <Link class="text-base font-bold" href={`/products/${product.id}`}>
              {product.title}
            </Link>
            <span class="text-[#919090]">
              <Link href={`/category/${product.category}`}>({product.category})</Link>
            </span>
          </h2>
          <p class="text-[#919090] text-sm ">{product.description}</p>

          <p class="text-rose-600 text-sm mt-4"><span class="text-[#919090] line-through">${product.price}</span> ${product.discountPercentage}</p>
        </div>
      )}
    </div>
  )
}

export default CategoryProductList