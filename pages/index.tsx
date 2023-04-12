import Head from 'next/head';
import Navbar from '../components/Navbar';
import HxhArt from '../assets/img/hxhart.png';
import Image from 'next/image';
import Footer from '../components/Footer';
import Portrait from '../assets/img/peter.png';
import HeroButton from '../components/HeroButton';

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
      <div className="min-h-screen hero container max-w-screen-xl mx-auto pb-10 m-0">
        <Image
          src={HxhArt}
          className="w-full md:w-2/3 mx-auto"
          alt="Line art from Hunter x Hunter. The characters are looking up at a galaxy."
        />
        <div className="grid grid-flow-row sm:grid-flow-col gap-8 container md:px-32 w-full pl-3 pr-3 pb-3">
          <div className="col-span-2">
            <h1 className="font-sourcepro text-5xl font-bold text-purple-900">
              Hey, I'm Peter<span className="text-purple-300">.</span>
            </h1>
            <p className="mt-2">
              I'm currently a student at Cornell University, where I'm finishing
              up a B.S. in Computer Science. I like weird music, basketball, and
              travel. Work-wise, I like to consider myself a generalist, but
              most enjoy working on impactful and performant systems with a
              research-like focus.
            </p>
            <p className="mt-2">
              Most recently, I've been doing cloud / distributed computing
              research with the <b>Cascade</b> group, under the supervision of
              Ken Birman. We're working on a distributed framework for
              applications that need strong consistency and availability at low
              latency. You can find the GitHub repo{' '}
              <a
                className="underline text-sky-600"
                href="https://github.com/Derecho-Project/cascade"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
            <ul>
              <li className="w-fit inline-block mr-4">
                <HeroButton name="Resume" link="/Resume.pdf" />
              </li>
              <li className="w-fit inline-block mr-4">
                <HeroButton
                  name="LinkedIn"
                  link="https://www.linkedin.com/in/peterlingwu/"
                />
              </li>
              <li className="w-fit inline-block mr-4">
                <HeroButton name="GitHub" link="https://github.com/ptwu" />
              </li>
            </ul>
          </div>
          <div>
            <Image
              src={Portrait}
              className="w-96"
              alt="Portrait of Peter in Ninh Binh, Vietnam."
            />
          </div>
        </div>

        <div className="grid grid-flow-row sm:grid-flow-col gap-8 container md:px-32 w-full p-3">
          <div>
            <h1 className="font-sourcepro text-5xl font-bold text-purple-900">
              Previous Work
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
