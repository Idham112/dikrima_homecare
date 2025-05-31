import Image from 'next/image';
import Button from './common/Button';

export default function ContactBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
      <div className="bg-[#2d5c50] rounded-lg shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 lg:gap-12 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="bg-[#0BB75E] rounded-full h-32 w-32 md:h-24 md:w-24 lg:h-32 lg:w-32 flex-shrink-0 overflow-hidden">
              <Image
                src="/icon/Service2.svg"
                alt="Healthcare Professional"
                width={200}
                height={200}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col justify-center text-left py-6">
              <h2 className="text-white text-xl md:text-2xl font-bold mb-2 max-w-md">
                Kami siap menghadirkan pelayanan kesehatan ke tempat Anda
              </h2>
              <p className="text-white">
                Yuk jangan ragu untuk hubungi Kami, Kamu bisa konsultasi dulu
                dengan Kami
              </p>
            </div>
          </div>
          <Button
            type={'fill'}
            className="mt-4 sm:mt-0 w-full sm:w-auto flex"
            label={'Konsultasi Layanan'}
            href={'#'}
          />
        </div>
      </div>
    </section>
  );
}
