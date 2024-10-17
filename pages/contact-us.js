import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContactUs() {
  // Set default theme based on local storage or use light as default
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  return (
    <>
      <Head>
        <title>Contact Us - GoodsParadise</title>
        <meta name="description" content="Get in touch with GoodsParadise for inquiries and support." />
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
        <h1 className="text-3xl font-bold text-white">Contact Us</h1>
        <p className="mt-4 text-white">
          Goods Paradise
        </p>
        <p className="mt-2 text-white">
          Email: <a href="mailto:goodsparadise2578@gmail.com" className="underline">goodsparadise2578@gmail.com</a>
        </p>
        <p className="mt-2 text-white">
          Have a question, suggestion, or need assistance? Feel free to reach out to us using the form below or by email. We're here to help!
        </p>

        <p className="mt-2 text-white">
          Follow us on social media:
        </p>
        <p className="mt-2 text-white">
          [Insert your social media links here]
        </p>
        <p className="mt-2 text-white">
          We strive to respond to all inquiries promptly. Thank you for choosing Goods Paradise!
        </p>
      </main>
    </>
  );
}
