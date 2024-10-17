import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AffiliateDisclosure() {
  // Set default theme based on local storage or use light as default
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  return (
    <>
      <Head>
        <title>Affiliate Disclosure - GoodsParadise</title>
        <meta name="description" content="Learn about the affiliate program closure at GoodsParadise." />
      </Head>

      <header className="flex justify-between items-center p-4 bg-white shadow">
      <Link href="/" className="text-2xl font-bold text-gray-800">
          <span className='text-red-700'>G</span>oods <span className='text-red-700'>P</span>aradise
        </Link>
        <nav className="flex space-x-4">
          <Link href="/about-us" className="text-gray-800 hover:underline">About Us</Link>
          <Link href="/contact-us" className="text-gray-800 hover:underline">Contact Us</Link>
          <Link href="/affiliate-disclosure" className="text-gray-800 hover:underline">Affiliate Disclosure</Link>
        </nav>
      </header>

      <main className="min-h-screen flex flex-col bg-gradient-to-r from-purple-500 to-indigo-600 p-4">
        <h1 className="text-3xl font-bold text-white">Affiliate Disclosure</h1>
        <p className="mt-4 text-white">
          Goods Paradise is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
        </p>
        <p className="mt-2 text-white">
          As an Amazon Associate, we earn from qualifying purchases made through our affiliate links.
        </p>
        <p className="mt-2 text-white">
          Please note that our product recommendations are based on our honest opinions and experiences. We are not compensated for positive reviews or endorsements.
        </p>
        <p className="mt-2 text-white">
          If you have any questions or concerns, please feel free to contact us at <a href="mailto:goodsparadise2578@gmail.com" className="underline">goodsparadise2578@gmail.com</a>.
        </p>
        <p className="mt-2 text-white">
          Thank you for visiting Goods Paradise!
        </p>
      </main>
    </>
  );
}
