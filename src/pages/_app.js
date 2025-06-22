import '@/styles/globals.css';
import { Petrona, Manrope } from 'next/font/google';

export const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const petrona = Petrona({
  subsets: ['latin'],
  variable: '--font-petrona',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${manrope.className} ${petrona.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
