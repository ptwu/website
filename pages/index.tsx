import Head from 'next/head';
import Navbar from '@/components/Navbar';
import HxhArt from '@/assets/img/hxhart.png';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Portrait from '@/assets/img/peter.png';
import HeroButton from '@/components/HeroButton';
import ProjectCard from '@/components/ProjectCard';
import Poker from '@/assets/img/poker.jpg';
import Cascade from '@/assets/img/cascade.png';
import Fitme from '@/assets/img/fitme.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Peter Wu</title>
      </Head>
      <Navbar />
      <div className="min-h-screen hero container max-w-screen-xl mx-auto pb-10 m-0">
        <Image
          src={HxhArt}
          className="w-full md:w-3/5 mx-auto"
          alt="Line art from Hunter x Hunter. The characters are looking up at a galaxy."
        />
        <div className="grid grid-flow-row sm:grid-flow-col gap-8 container md:px-32 w-full pl-3 pr-3 pb-3">
          <div className="col-span-2">
            <h1 className="font-sourcepro text-5xl font-bold text-purple-900">
              Hey, I&apos;m Peter<span className="text-purple-300">.</span>
            </h1>
            <p className="mt-2">
              I&apos;m currently a student at Cornell University, where I&apos;m
              finishing up a B.S. in Computer Science. I like weird music,
              basketball, and travel (not in basketball though). Work-wise, I
              like to consider myself a generalist, but I most enjoy working on
              impactful and performant systems with a research-like focus.
            </p>
            <p className="mt-2">
              Most recently, I&apos;ve been doing cloud / distributed computing
              research with the <b>Cascade</b> group, under the supervision of
              Ken Birman. We&apos;re working on a distributed framework for
              applications that need strong consistency and availability at low
              latency.
            </p>
            <p className="mt-2">
              Please feel free to reach out if you&apos;d like to chat!
            </p>
            <ul className="md: mb-1 xs:mb-2">
              <li className="w-fit inline-block mr-4 mx-auto">
                <HeroButton name="Resume" link="/Resume.pdf" />
              </li>
              <li className="w-fit inline-block mr-4 mx-auto">
                <HeroButton
                  name="LinkedIn"
                  link="https://www.linkedin.com/in/peterlingwu/"
                />
              </li>
              <li className="w-fit inline-block mr-4 mx-auto">
                <HeroButton name="GitHub" link="https://github.com/ptwu" />
              </li>
            </ul>
          </div>
          <div>
            <Image
              src={Portrait}
              className="w-96 mx-auto"
              alt="Portrait of Peter in Ninh Binh, Vietnam."
            />
          </div>
        </div>

        <div className="grid grid-flow-row gap-8 md:px-32 w-full">
          <div>
            <h1 className="font-sourcepro text-5xl font-bold text-purple-900 mb-3">
              Previous Work
            </h1>
            <div className="grid grid-flow-row sm:grid-flow-col gap-8 mx-auto container w-full pb-3">
              <ProjectCard
                name="Cascade"
                description={[
                  <a
                    target="_blank"
                    className="underline text-blue-500"
                    rel="noopener noreferrer"
                    href="https://github.com/Derecho-Project/cascade"
                    key="cascade-1"
                  >
                    Cascade
                  </a>,
                  ' is a C++17 cloud application framework powered by optimized ',
                  <a
                    target="_blank"
                    className="underline text-blue-500"
                    rel="noopener noreferrer"
                    href="https://en.wikipedia.org/wiki/Remote_direct_memory_access"
                    key="cascade-2"
                  >
                    RDMA
                  </a>,
                  ' data paths. It provides a key/value API for data manipulation in distributed memory and persistent storage. Besides the API, Cascade allows injecting logic on the data paths for low-latency application. I developed C#/C++ interop with zero-copy guarantees.',
                ]}
                image={Cascade}
                imageAltText="Image of Cascade."
                tags={['c++', 'c#', 'python', 'linux']}
              />
              <ProjectCard
                name="Distributed Texas Hold 'Em Poker"
                description={[
                  'Dealing with the isolation of the pandemic in the spring of 2020, I made this multiplayer web game which implements a classic poker game to play with friends and family. Built with socket.io, Node.js, and Express. ',
                  <a
                    target="_blank"
                    className="underline text-blue-500"
                    rel="noopener noreferrer"
                    href="https://github.com/ptwu/distributed-texasholdem/"
                    key="poker-1"
                  >
                    GitHub Repo
                  </a>,
                ]}
                image={Poker}
                imageAltText="Image of the Distributed Texas Hold 'Em poker interface."
                tags={['websockets', 'node.js', 'express']}
              />
              <ProjectCard
                name="fitme"
                description={[
                  'fitme is a platform for fashion, powered by computer vision. We built a microservice using Flask, Docker, and ',
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://ai.facebook.com/blog/-detectron2-a-pytorch-based-modular-object-detection-library-/"
                    key="fitme-1"
                  >
                    Facebook AI&apos;s Detectron2
                  </a>,
                  ' which is based on Mask R-CNN. We then connected this with a TypeScript React webapp allowing users to upload and segment fit images. ',
                  <a
                    target="_blank"
                    className="underline text-blue-500"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/watch?v=icFoew4bchg/"
                    key="fitme-2"
                  >
                    Demo Video
                  </a>,
                ]}
                image={Fitme}
                imageAltText="Image of the Fitme interface."
                tags={['python', 'pytorch', 'flask', 'react', 'docker']}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
