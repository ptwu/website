import Navbar from '../components/Navbar';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Peter Wu | Blog</title>
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
      <div className="min-h-screen hero container max-w-screen-xl mx-auto pb-10 mt-8">
        <div className="grid grid-flow-row sm:grid-flow-col gap-8 container md:px-32 w-full pl-3 pr-3 pb-3">
          <div className="col-span-2">
            <h1 className="font-sourcepro text-5xl font-bold text-purple-900">
              Blog<span className="text-purple-300">.</span>
            </h1>
            <p className="mt-2">
              Here you'll find some misc. writings that I may or may not keep
              up-to-date over the years.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
