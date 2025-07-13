import React from 'react';
import Button from '@/components/common/Button';

function ProductCardSheet({ productName, price }) {
  return (
    <div className="px-5 py-8 md:py-14 flex flex-col gap-3">
      <h2 className="cstm-font-sans text-[#3D5F5A] font-bold text-[16px]">
        {productName}
      </h2>
      <p className="text-[#121212] text-[16px]">
        Rp{price.toLocaleString('id-ID')}
      </p>
      <div>
        <Button type={'text'} href={'#'} size={'sm'} label={'Pesan Sekarang'} />
      </div>
    </div>
  );
}

export default ProductCardSheet;
