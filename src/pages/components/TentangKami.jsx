import Image from 'next/image';
import {
  tentangKami,
  patient,
  since,
  partnerKesehatan,
  testimony,
} from '../utilties/tentangkami';

const TentangKamiPage = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row mt-[120px]">
      <div className="text-black basis-full lg:basis-2/3">
        <div className="flex flex-col gap-7 w-full lg:w-[700px] px-4 lg:px-0 text-center lg:text-left">
          <h3 className="text-base text-[#238C7E] font-serif">
            {tentangKami.title}
          </h3>

          <h2 className="text-2xl  lg:text-4xl text-[#3D5f5A] font-serif font-bold">
            {tentangKami.desc}
          </h2>

          <p className="text-base font-sans text-[#4A4A4A] w-full lg:w-[680px] leading-[165%]">
            {tentangKami.cont}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-10 justify-center lg:justify-start">
            <button className="w-full text-[#3D5f5A] sm:w-[180px] lg:w-[200px] h-12 rounded-xl border-[1.5px] gap-2.5 py-[14px] px-2.5 flex items-center justify-center text-sm lg:text-base">
              Lihat Layanan Kami
            </button>
            <button className="w-full sm:w-[180px] lg:w-[200px] h-12 rounded-xl gap-[10px] pt-[14px] pr-[10px] pb-[14px] pl-[10px] bg-[#0BB75E] text-white flex items-center justify-center text-sm lg:text-base">
              Booking Sekarang
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col basis-full lg:basis-1/3 mt-20 lg:mt-auto mb-6 ml-0 lg:ml-8 items-center lg:items-end px-4 lg:px-0">
        <div className="flex flex-col gap-6 lg:gap-12">
          <div className="flex flex-row gap-5">
            <div className="w-[58px] h-[58px] rounded-xl bg-[#F8F7F7] shadow-sm flex items-center justify-center">
              <Image src="/hospice_1.png" alt="Icon" width={32} height={32} />
            </div>
            <div className="flex flex-col justify-center w-full max-w-[310px]">
              <h4 className="text-xl text-[#121212] font-bold font-sans">
                {patient.number}
              </h4>
              <p className="text-sm text-[#4A4A4A] font-sans">{patient.desc}</p>
            </div>
          </div>

          <div className="flex flex-row gap-5">
            <div className="w-[58px] h-[58px] rounded-xl bg-[#F8F7F7] shadow-sm flex items-center justify-center">
              <Image src="/hospice_1.png" alt="Icon" width={32} height={32} />
            </div>
            <div className="flex flex-col justify-center w-full max-w-[310px]">
              <h4 className="text-xl text-[#121212] font-bold font-sans">
                {since.number}
              </h4>
              <p className="text-sm text-[#4A4A4A] font-sans">{since.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKamiPage;
