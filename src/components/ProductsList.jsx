import React from 'react'
import ProductsCard from './ProductsCard';
import products from '@/utilities/products';


function ProductsList() {
  return (
    <div className='grid grid-cols-2 md:max-w-[900px] -mx-[1px] -my-[1px]'>
      {products.map((product, index) => (
        <div 
          key={product.id}
          className={`
            border border-[#C3D4D1]
            ${index % 2 === 0 ? 'border-l-0' : 'border-r-0'}
            ${index < products.length - 2 ? 'border-b-0' : ''}
            ${index === 0 || index === 1 ? 'border-t-0' : ''}
          `}
        >
          <ProductsCard product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductsList