import MedicalIcon from "@/components/ProductIcons/MedicalIcon";
import VitaminIcon from "@/components/ProductIcons/VitaminIcon";
import VaccinationIcon from "@/components/ProductIcons/VaccinationIcon";
import SecretomeIcon from "@/components/ProductIcons/SecretomeIcon";
import TelemedicineIcon from "@/components/ProductIcons/TelemedicineIcon";

const products = [
  {
    id: 1,
    productCategory: "Vaccination",
    description:
      "Vaksinasi untuk dewasa dan anak - aman, tersertifikasi, dan nyaman di rumah.",
    startingPrice: 350000,
    icon: <VaccinationIcon />,
    items: [
      {
        productName: "Influenza 3 Strain (Flubio)",
        price: 400000,
      },
      {
        productName: "Influenza 4 Straing (Vaxigrip/Influvax)",
        price: 425000,
      },
      {
        productName: "Hepatitis B (Biofarma)",
        price: 385000,
      },
      {
        productName: "Hepatitis A Anak (Avaxim 80)",
        price: 595000,
      },
      {
        productName: "Hepatitis A Dewasa (Avaxim 160)",
        price: 695000,
      },
      {
        productName: "Varicella (Biofarma)",
        price: 720000,
      },
      {
        productName: "Meningitis (Menivax)",
        price: 400000,
      },
      {
        productName: "HPV Gardasil 4",
        price: 1350000,
      },
      {
        productName: "HPV Gardasil 9",
        price: 2350000,
      },
      {
        productName: "MMR (Measles Mumps Rubella)",
        price: 700000,
      },
      {
        productName: "Pneumonia (Prevenar 13)",
        price: 990000,
      },
      {
        productName: "Pneumonia (Prevenar 20)",
        price: 1175000,
      },
      {
        productName: "Tifoid (Typhim)",
        price: 540000,
      },
      {
        productName: "DBD (Q Denga)",
        price: 725000,
      },
      // Add more vaccinations here
    ],
  },
  {
    id: 2,
    productCategory: "Vitamin Immune Booster",
    description:
      "Infus atau injeksi vitamin untuk meningkatkan daya tahan tubuh dan energi",
    startingPrice: 400000,
    icon: <VitaminIcon />,
    items: [
      {
        productName: "Injeksi Vitamin B Kompleks",
        price: 300000,
      },
      {
        productName: "Injeksi Vitamin C 1000 mg",
        price: 300000,
      },
      {
        productName: "Injeksi Vitamin B & C",
        price: 350000,
      },
      {
        productName: "Injeksi Vitamin C & Kolagen",
        price: 350000,
      },
      {
        productName: "Injeksi Vitamin B, C & Kolagen",
        price: 425000,
      },
      {
        productName: "Injeksi Vitamin C & Glutathion",
        price: 450000,
      },
      {
        productName: "Injeksi Vitamin D (IM)",
        price: 600000,
      },
      {
        productName: "Injeksi Multivitamin Lengkap",
        price: 625000,
      },
      {
        productName: "Injeksi Pelindung Lambung",
        price: 300000,
      },
      {
        productName: "Add on Metode Infus",
        price: 150000,
      },
      // Add more vaccinations here
    ],
  },
  {
    id: 3,
    productCategory: "Medical Check Up Doctor",
    description:
      "Pemeriksaan menyeluruh oleh dokter profesional langsung di rumah Anda.",
    startingPrice: 350000,
    icon: <MedicalIcon />,
    items: [
      {
        productName: "Lorem Ipsum Check-Up A",
        price: 999999,
      },
      {
        productName: "Lorem Ipsum Check-Up B",
        price: 999999,
      },
      {
        productName: "Lorem Ipsum Check-Up C",
        price: 999999,
      },
      {
        productName: "Lorem Ipsum Check-Up D",
        price: 999999,
      },
      {
        productName: "Lorem Ipsum Check-Up E",
        price: 999999,
      },
      // Add more vaccinations here
    ],
  },
  {
    id: 4,
    productCategory: "Beauty Booster Treatment",
    description:
      "Perawatan infus atau injeksi untuk kulit sehat, cerah, dan bercahaya.",
    startingPrice: 500000,
    icon: <VitaminIcon />,
    items: [
      {
        productName: "Lorem Ipsum Glow Infusion",
        price: 999999,
      },
      {
        productName: "Lorem Ipsum Hydra Boost",
        price: 999999,
      },
      {
        productName: "Lorem Ipsum Collagen Shot",
        price: 999999,
      },
      {
        productName: "Lorem Ipsum Whitening Therapy",
        price: 999999,
      },
      {
        productName: "Lorem Ipsum Detox Drip",
        price: 999999,
      },

      // Add more vaccinations here
    ],
  },
  {
    id: 5,
    productCategory: "Secretome Stemcell",
    description:
      "Terapi regeneratif berbasis stemcell untuk pemulihan dan anti-aging.",
    startingPrice: 2500000,
    icon: <SecretomeIcon />,
    items: [
      {
        productName: "Lorem Ipsum Stemcell A",
        price: 999999,
      },
      {
        productName: "Lorem Ipsum Stemcell B",
        price: 999999,
      },
      {
        productName: "Lorem Ipsum Stemcell C",
        price: 999999,
      },
      {
        productName: "Lorem Ipsum Stemcell D",
        price: 999999,
      },
      {
        productName: "Lorem Ipsum Stemcell E",
        price: 999999,
      },

      // Add more vaccinations here
    ],
  },
  {
    id: 6,
    productCategory: "Telemedecine",
    description:
      "Konsultasi Dokter secaraw online untuk diagnosa cepat dan rekomendasi perawatan.",
    startingPrice: 150000,
    icon: <TelemedicineIcon />,
    items: [
      {
        productName: "Lorem Ipsum GP Consultation",
        price: 999999,
      },
      {
        productName: "Lorem Ipsum Specialist Consult",
        price: 999999,
      },
      {
        productName: "Lorem Ipsum Pediatric Advice",
        price: 999999,
      },
      {
        productName: "Lorem Ipsum Mental Health",
        price: 999999,
      },
      {
        productName: "Lorem Ipsum Nutrition Consult",
        price: 999999,
      },

      // Add more vaccinations here
    ],
  },
  // Add more product categories if needed
];

export default products;
