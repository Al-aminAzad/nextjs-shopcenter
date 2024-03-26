import ProductListHero from "@/components/products/ProductListHero";
import ProductList from "@/components/products/ProductList";

export default function Home() {
  return (
    <>
      <ProductListHero/>
      <main>
        <ProductList/>
      </main>
    </>
  );
}