import React from "react";

function ProductCardSheet({ productName, price }) {
  return (
    <div className="px-5 py-8 md:py-14 flex flex-col gap-3">
      <h2 className="text-[#3D5F5A] font-bold text-[16px]">{productName}</h2>
      <h2 className="text-[#121212] text-[16px]">
        Rp{price.toLocaleString("id-ID")}
      </h2>

      <a
        href="#"
        className="w-full md:w-auto whitespace-nowrap text-xs md:text-sm md:text-start font-semibold text-[#0BB75E] hover:text-[#71e4a9] hover:underline cursor-pointer"
      >
        Pesan Sekarang
      </a>
    </div>
  );
}

export default ProductCardSheet;
