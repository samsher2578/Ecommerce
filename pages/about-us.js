import { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function AboutUs() {
  // Set default theme based on local storage or use light as default
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  return (
    <>
      <Head>
        <title>About Us - GoodsParadise</title>
        <meta name="description" content="Learn more about GoodsParadise, our mission, and values." />
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
        <h1 className="text-3xl font-bold text-white page-title">About Us</h1>
        <p className="mt-4 page-content text-white">
          Welcome to Goods Paradise, your one-stop shop for discovering amazing products that enhance your life!
        </p>
        <p className="mt-2 page-content text-white">
          We are a team of passionate individuals with a decade of experience in affiliate marketing. We leverage this experience to curate a diverse collection of high-quality products across various categories.
        </p>

        <p className="mt-4 page-content text-white">
          Our Mission:
        </p>
        <p className="mt-2 page-content text-white">
          Our mission is to empower you to find the perfect products that meet your needs and desires. We achieve this by:
        </p>
        <p className="mt-2 page-content text-white">
          Honest Reviews: We strive to provide unbiased and detailed reviews, highlighting both the pros and cons of each product.
        </p>
        <p className="mt-2 page-content text-white">
          In-Depth Research: We conduct extensive research to identify the best products on the market, saving you time and effort.
        </p>
        <p className="mt-2 page-content text-white">
          Niche Expertise: Our team possesses expertise in various niches, ensuring a well-rounded selection of products.
        </p>
        <p className="mt-2 page-content text-white">
          Value and Education: We believe in providing valuable information to help you make informed purchasing decisions.
        </p>

        <p className="mt-4 page-content text-white">
          Why Choose Goods Paradise?
        </p>
        <p className="mt-2 page-content text-white">
          Trust and Transparency: We maintain complete transparency about our affiliate relationships, allowing you to shop with confidence.
        </p>
        <p className="mt-2 page-content text-white">
          Curated Selection: We handpick only the best products from reputable brands, saving you from sifting through countless options.
        </p>
        <p className="mt-2 page-content text-white">
          Community Focus: We value our readers and encourage interaction through comments and social media.
        </p>

        <p className="mt-4 page-content text-white">
          Get in Touch!
        </p>
        <p className="mt-2 page-content text-white">
          We want to hear from you! Do you have questions about a specific product or suggestions for products you'd like to see reviewed? Feel free to reach out to us at goodsparadise2578@gmail.com. We'd be happy to assist you in any way we can.
        </p>
        <p className="mt-4 page-content text-white">
          Together, let's explore the world of amazing products and create Goods Paradise!
        </p>
      </main>
    </>
  );
}
