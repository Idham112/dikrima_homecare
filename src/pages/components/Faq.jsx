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
      title: 'Bagaimana Proses Booking di Dikrima Homecare?',
      content:
        'Silahkan menghubungi customer service kami melalui WhatsApp atau telepon yang tertera pada website ini atau klik "Konsultasi Layanan". Setelah itu, customer service akan membantu Anda dalam proses booking layanan yang Anda butuhkan.',
    },
    {
      title: 'Apa Visi dan Misi Dikrima Homecare?',
      content:
        'Misi Kami adalah Menjadi sahabat dan mitra kesehatan pilihan masyarakat dengan pelayanan optimal secara holistik, tercaya dan professional. Sedangkan Misi kami Mewujudkan pelayanan kesehatan secara efektif serta optimal dimanapun dan kapanpun dengan memberikan lauanan yang berkualitas, nyaman, terjangkau dari segi biaya maupun waktu guna mencapai masyarakat menuju indonesia sehat.',
    },
    {
      title: 'Ada Berapa Estimasi Tenaga Medis yang dimiliki Dikrima Homecare?',
      content:
        'Saat ini kami memiliki sekitar 10 tenaga kesehatan yang ahli dan profesional (tersertifikasi) yang siap membantu anda. ',
    },
    {
      title: 'Bagaimana Mengenai Harga Layanan Dikrima Homecare?',
      content:
        'Harga layanan kami bervariasi tergantung pada jenis layanan yang Anda butuhkan. Kami menyediakan berbagai paket layanan yang dapat dilihat pada bagian "layanan Kami", silahkan klik "Lihat Daftar Harga" atau bisa menghubungi customer service kami atau klik "Konsultasi Layanan".',
    },
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-center text-2xl md:text-3xl font-semibold text-[#2d5c50] py-4 md:py-8">
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
