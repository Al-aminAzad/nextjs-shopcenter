import ProductDetails from "@/components/products/ProductDetails"

const ProductDetailsPage = ({ params }) => {
    const { id } = params
    return <ProductDetails id={id} />
}

export default ProductDetailsPage