import Image from "next/image";
import TentangKamiPage from "./components/TentangKami";
import PartnerKesehatan from "./components/PartnerKesehatan";
import GaleriLayananPasien from "./components/GaleriLayananPasien";
import ProductsList from "@/components/ProductsList";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto bg-white">
      <ProductsList />
      <TentangKamiPage />
      <PartnerKesehatan />
      <GaleriLayananPasien />
    </div>
  );
}
