// components/ProductPriceSheet.jsx
import React from 'react';
import ProductCardSheet from './ProductCardSheet';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import Button from '@/components/common/Button';

function ProductPriceSheet({ open, setOpen, product }) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          className={'w-full min-w-auto'}
          size={'sm'}
          type={'text'}
          label={'Lihat Daftar Harga'}
        />
      </SheetTrigger>
      <SheetContent className="w-full min-h-screen overflow-y-auto bg-white md:max-w-[50vw]">
        <div className="px-10 pt-10 pb-20 flex flex-col gap-6">
          <div className="w-11 h-11 bg-emerald-200 rounded-xl flex justify-center items-center text-emerald-500">
            {product.icon}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="cstm-font-sans font-extrabold text-[32px] text-[#3D5F5A]">
              {product.productCategory}
            </h2>
            <p className="text-[#4A4A4A]">{product.description}</p>
          </div>

          <div>
            <h3 className="font-bold text-xl text-[#000000] mb-5">
              {' '}
              Daftar harga lengkap untuk layanan{' '}
              {product.productCategory.toLowerCase()}
            </h3>
            {/* cards */}
            <div className="grid grid-cols-2">
              {product.items.map((item, index) => (
                <div
                  key={index}
                  className={`
            border border-[#C3D4D1]
            ${index % 2 === 0 ? 'border-l-0' : 'border-r-0'}
            ${index < item.length ? 'border-b-0' : ''}
            ${index === 0 || index === 1 ? 'border-t-0' : ''}
          `}
                >
                  <ProductCardSheet
                    productName={item.productName}
                    price={item.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 w-full min-h-[77px] flex flex-col gap-2 md:flex-row justify-center md:justify-between items-center bg-white px-4 shadow-[0_-4px_8px_-4px_rgba(0,0,0,0.1)]">
          <h3 className="text-[#121212] text-sm md:text-base">
            Bingung atau ada pertanyaan?
          </h3>
          <a
            href="https://wa.me/6281215202124"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0BB75E] text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#0aa654] transition-colors"
          >
            Konsultasi Layanan
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default ProductPriceSheet;
