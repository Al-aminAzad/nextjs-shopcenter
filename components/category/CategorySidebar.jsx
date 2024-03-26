'use client'

import { usePathname, useRouter } from "next/navigation"

const CategorySidebar = () => {
  const router = useRouter()
  const pathName = usePathname()

  return (
    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      <button onClick={() => router.push('/')} className="hover:border-b border-black block h-6 box-border mt-4">All</button>
      <button onClick={() => router.push('/category/smartphones')} className={`${pathName === '/category/smartphones' ? 'text-emerald-500' : ''} hover:border-b border-black block h-6 box-border mt-5`}>Smartphones</button>
      <button onClick={() => router.push('/category/laptops')} className={`${pathName === '/category/laptops' ? 'text-emerald-500' : ''} hover:border-b border-black block h-6 box-border mt-5`}>Laptops</button>
      <button onClick={() => router.push('/category/fragrances')} className={`${pathName === '/category/fragrances' ? 'text-emerald-500' : ''} hover:border-b border-black block h-6 box-border mt-5`}>Fragrances</button>
      <button onClick={() => router.push('/category/skincare')} className={`${pathName === '/category/skincare' ? 'text-emerald-500' : ''} hover:border-b border-black block h-6 box-border mt-5`}>Skincare</button>
      <button onClick={() => router.push('/category/groceries')} className={`${pathName === '/category/groceries' ? 'text-emerald-500' : ''} hover:border-b border-black block h-6 box-border mt-5`}>Groceries</button>
    </div>
  )
}

export default CategorySidebar