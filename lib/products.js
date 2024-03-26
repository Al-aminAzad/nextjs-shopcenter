import products from "@/data/products.json"

export const getProducts = () => {
    return products;
}

export const getProductDetails = (id) => {
    const foundProduct = products.find(item => item.id === Number(id))
    return foundProduct
}

export const getProductsByCategory = (categoryName) => {
    const foundProducts = products.filter(item => item.category === categoryName)
    return foundProducts
}