import CategoryHero from "@/components/category/CategoryHero"
import CategoryProductList from "@/components/category/CategoryProductList"
import CategorySidebar from "@/components/category/CategorySidebar"

const Category = ({ params }) => {
    const { categoryName } = params
    return (
        <>
            <CategoryHero />
            <main>
                <section class="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
                    <CategorySidebar />
                    <CategoryProductList categoryName={categoryName} />
                </section>

            </main>

        </>
    )
}

export default Category