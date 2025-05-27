import React from 'react';
import ProductsCard from './ProductsCard';
import products from '@/utilities/products';

function ProductsList() {
  return (
    <section className="flex flex-col gap-8 items-center  md:px-0 mt-16">
      <h2 className="text-center text-[#3D5F5A] font-bold text-2xl md:text-[32px]">
        Layanan Kami
      </h2>
      <div className="grid grid-cols-2 justify-center w-full md:max-w-[900px] -mx-[1px] -my-[1px]">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`
            border border-[#C3D4D1]
            ${index % 2 === 0 ? 'border-l-0' : 'border-r-0'}
            ${index < products.length ? 'border-b-0' : ''}
            ${index === 0 || index === 1 ? 'border-t-0' : ''}
          `}
          >
            <ProductsCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsList;
