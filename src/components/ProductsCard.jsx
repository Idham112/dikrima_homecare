import React from "react";
import ProductPriceSheet from "./ProductPriceSheet";

function ProductsCard({ product }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="px-4 md:px-9 py-5 md:py-14 flex flex-col gap-4">
      <div className="w-11 h-11 bg-emerald-200 rounded-xl flex justify-center items-center text-emerald-500">
        {product.icon}
      </div>
      <div>
        <h2 className="text-[#3D5F5A] font-bold text-sm md:text-xl">
          {product.productCategory}
        </h2>
        <p className="hidden md:block text-[#4A4A4A] text-sm">
          {product.description}
        </p>
      </div>
      <div className="flex flex-col justify-center gap-[6px]">
        <h3 className="text-[#4A4A4ABF] text-xs md:text-sm opacity-75">
          Mulai Dari
        </h3>
        <h2 className="text-[#121212] text-sm md:text-xl font-bold">
          Rp{product.startingPrice.toLocaleString("id-ID")}
        </h2>
      </div>
      <div className=" flex flex-col justify-center items-center gap-2 md:flex-row md:gap-7">
        <ProductPriceSheet open={open} setOpen={setOpen} product={product} />
        <a
          href="#"
          className="w-full text-xs md:text-sm text-center font-semibold border-[1.5px] rounded-xl border-[#3D5F5A] text-[#3D5F5A] py-[10px] transition-colors duration-200 hover:bg-[#3D5F5A] hover:text-white"
        >
          Konsultasi Layanan
        </a>
      </div>
    </div>
  );
}

export default ProductsCard;
