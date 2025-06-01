import React from 'react';
import ProductPriceSheet from './ProductPriceSheet';
import Button from '@/components/common/Button';

function ProductsCard({ product }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="px-4 md:px-9 py-5 md:py-14 flex flex-col gap-7">
      <div className="w-11 h-11 bg-emerald-200 rounded-xl flex justify-center items-center text-emerald-500">
        {product.icon}
      </div>
      <div>
        <h2 className="text-[#3D5F5A] cstm-font-sans font-bold text-sm md:text-xl mb-2">
          {product.productCategory}
        </h2>
        <p className="hidden md:block text-[#4A4A4A] text-sm">
          {product.description}
        </p>
      </div>
      <div className={'flex flex-col gap-5'}>
        <div className="flex flex-col justify-center gap-[6px]">
          <p className="text-[#4A4A4ABF] text-xs md:text-sm">Mulai Dari</p>
          <h4 className="cstm-font-sans text-[#121212] text-sm md:text-xl font-bold">
            Rp{product.startingPrice.toLocaleString('id-ID')}
          </h4>
        </div>
        <div className=" flex flex-col justify-center items-center gap-2 md:flex-row">
          <ProductPriceSheet open={open} setOpen={setOpen} product={product} />
          <Button
            className={'w-full min-w-auto text-xs md:text-sm'}
            size={'sm'}
            label={'Konsultasi Layanan'}
            type={'outline'}
            href="https://wa.me/6281215202124"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
