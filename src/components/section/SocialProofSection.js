import React from 'react';
import { Separator } from '@/components/ui/separator';
import { linkList } from '@/utils/constant';

const proofContent = [
  { title: '200+', description: 'Pasien Telah Kami Layani' },
  {
    title: 'Sejak 2019',
    description: 'Berpengalaman Memberikan Layanan Homecare',
  },
  { title: '10+', description: 'Tenaga Kesehatan Professional' },
];

function SocialProofSection() {
  return (
    <section className={'max-w-[1024px] mx-auto mt-16'}>
      <div
        className={
          'px-6 py-4 bg-dark-green text-white flex flex-col gap-6 items-center justify-center lg:flex-row rounded-2xl'
        }
      >
        {proofContent.map((proof, index) => (
          <>
            <div
              key={proof.title}
              className={
                'flex flex-col gap-2 items-center justify-center text-white w-full'
              }
            >
              <h3 className={'text-lg font-sans font-bold'}>{proof.title}</h3>
              <p
                className={
                  'text-sm font-sans text-center text-white opacity-60'
                }
              >
                {proof.description}
              </p>
            </div>
            {index < proofContent.length - 1 && (
              <>
                <Separator
                  key={index}
                  orientation="vertical"
                  className={'hidden lg:block'}
                />
                <Separator
                  key={index}
                  orientation="horizontal"
                  className={'block w-[10px] lg:hidden'}
                />
              </>
            )}
          </>
        ))}
      </div>
    </section>
  );
}

export default SocialProofSection;
