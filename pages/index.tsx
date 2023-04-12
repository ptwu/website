import Head from 'next/head';
import Navbar from '../components/Navbar';
import HxhArt from '../assets/img/hxhart.png';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Peter Wu</title>
        <meta
          name="description"
          content="I'm a software engineer based in NYC from Cornell interested in building and researching distributed systems, and pushing software to hardware boundaries."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400&family=Source+Serif+Pro:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar />
      <div className="bg-slate-100 min-h-screen hero container max-w-screen-lg mx-auto pb-10">
        <Image
          src={HxhArt}
          className="w-full md:w-1/2 mx-auto"
          alt="Line art from Hunter x Hunter. The characters are looking up at a galaxy."
        />
      </div>
      <Footer />
    </>
  );
}
