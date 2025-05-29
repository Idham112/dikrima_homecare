import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

function FAQItem({ title, content, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none px-5"
        onClick={onClick}
      >
        <p className="font-semibold">{title}</p>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 flex-shrink-0 font-bold" />
        ) : (
          <ChevronDown className="h-5 w-5 flex-shrink-0 font-bold" />
        )}
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="pb-4 px-5 py-5">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openItem, setOpenItem] = useState(2);

  const faqItems = [
    {
      title: 'FAQ Title',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu volutpat lorem. Donec rhoncus nunc ac ipsum accumsan aliquam. Maecenas finibus, enim non fringilla volutpat, lorem risus molestie libero, eu aliquet quam dolor quis tortor. Suspendisse convallis bibendum nisi. Phasellus erat arcu, ultrices a ullamcorper sit amet, aliquet nec lectus. Vestibulum rhoncus dui nisi, eu fringilla elit vestibulum vel. Mauris sit amet porta tortor. Nulla sed dui iaculis, mattis velit a, semper sapien. Etiam eget felis tellus. Nullam elementum mauris et libero dignissim, quis maximus sem aliquam. Suspendisse potenti. Nulla vitae vehicula ante.',
    },
    {
      title: 'FAQ Title',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu volutpat lorem. Donec rhoncus nunc ac ipsum accumsan aliquam. Maecenas finibus, enim non fringilla volutpat, lorem risus molestie libero, eu aliquet quam dolor quis tortor.',
    },
    {
      title: 'FAQ Title',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu volutpat lorem. Donec rhoncus nunc ac ipsum accumsan aliquam. Maecenas finibus, enim non fringilla volutpat, lorem risus molestie libero, eu aliquet quam dolor quis tortor. Suspendisse convallis bibendum nisi. Phasellus erat arcu, ultrices a ullamcorper sit amet, aliquet nec lectus. Vestibulum rhoncus dui nisi, eu fringilla elit vestibulum vel. Mauris sit amet porta tortor. Nulla sed dui iaculis, mattis velit a, semper sapien. Etiam eget felis tellus. Nullam elementum mauris et libero dignissim, quis maximus sem aliquam. Suspendisse potenti. Nulla vitae vehicula ante.',
    },
    {
      title: 'FAQ Title',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu volutpat lorem. Donec rhoncus nunc ac ipsum accumsan aliquam.',
    },
    {
      title: 'FAQ Title',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu volutpat lorem. Donec rhoncus nunc ac ipsum accumsan aliquam. Maecenas finibus, enim non fringilla volutpat, lorem risus molestie libero, eu aliquet quam dolor quis tortor.',
    },
    {
      title: 'FAQ Title',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu volutpat lorem. Donec rhoncus nunc ac ipsum accumsan aliquam. Maecenas finibus, enim non fringilla volutpat, lorem risus molestie libero.',
    },
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-center text-2xl md:text-3xl font-semibold text-[#2d5c50] py-8">
        Frequently Asked Question
      </h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openItem === index}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  );
}
