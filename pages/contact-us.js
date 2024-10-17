import Head from 'next/head';

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us - GoodsParadise</title>
        <meta name="description" content="Get in touch with GoodsParadise for inquiries and support." />
      </Head>
      <main className="p-4">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4">
        Goods Paradise
          </p>
        <p className="mt-2">
        Email: goodsparadise2578@gmail.com
        </p>
        <p className="mt-2">
        Have a question, suggestion, or need assistance? Feel free to reach out to us using the form below or by email. We're here to help!
        </p>

        <p className="mt-2">
        Follow us on social media:
        </p>
        <p className="mt-2">
        [Insert your social media links here]
        We strive to respond to all inquiries promptly. Thank you for choosing Goods Paradise!
        </p>
      </main>
    </>
  );
}
