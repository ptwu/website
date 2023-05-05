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
import AttentionGrabbingHeading from '@/components/AttentionGrabbingHeading';

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
          className="w-full md:w-3/5 mx-auto dark:invert-95"
          alt="Line art from Hunter x Hunter made by me."
        />
        <div className="grid mx-auto flex justify-center items-center grid-flow-row lg:grid-flow-col gap-8 container md:px-32 w-full pl-3 pr-3 pb-3 dark:text-zinc-100">
          <div className="col-span-2">
            <AttentionGrabbingHeading text="Hey, I'm Peter" hasPeriod />
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
            <ul className="mt-6">
              <li className="w-fit inline-block mr-4 mx-auto">
                <HeroButton name="Resume" link="/Resume.pdf" />
              </li>
              <li className="w-fit inline-block mr-4 mx-auto">
                <HeroButton
                  name="LinkedIn"
                  link="https://www.linkedin.com/in/~peter/"
                />
              </li>
              <li className="w-fit inline-block mr-4 mx-auto">
                <HeroButton name="GitHub" link="https://github.com/ptwu" />
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <Image
              src={Portrait}
              className="w-56 md:w-42 lg:w-96 mx-auto"
              alt="Portrait of Peter in Ninh Binh, Vietnam."
            />
          </div>
        </div>
        <div className="grid mx-auto flex justify-center items-center grid-flow-row lg:grid-flow-col gap-8 container md:px-32 w-full pl-3 pr-3 pb-3 dark:text-zinc-100">
          <div>
            <div className="col-span-1">
              <AttentionGrabbingHeading text="Education" hasPeriod={false} />
            </div>
            <div className="grid grid-flow-row lg:grid-flow-col gap-8 mx-auto container w-full pb-3">
              <h1 className="text-3xl">
                Cornell University B.S. (hopefully 🤔), 2023
              </h1>
              <h3>
                At Cornell&apos;s College of Engineering, I&apos;ve taken a deep
                breadth of courses, which range from a strong focus on machine
                learning and data science (Computer Vision, Machine Learning,
                Advanced Machine Learning Systems), as well as systems
                development.
              </h3>
            </div>
            <Image
              src="/cornell.jpg"
              width={500}
              height={500}
              className="mx-auto"
              alt="Image of the Cornell University campus."
            />
          </div>
        </div>
        <div className="grid mx-auto flex justify-center items-center grid-flow-row lg:grid-flow-col gap-8 container md:px-32 w-full pl-3 pr-3 pb-3 dark:text-zinc-100">
          <div>
            <div className="col-span-1 mt-3">
              <AttentionGrabbingHeading text="Work History" hasPeriod={false} />
            </div>
            <div className="grid grid-flow-row lg:grid-flow-col gap-8 mx-auto container w-full pb-3">
              <Image
                src="/youtube.png"
                width={50}
                height={50}
                className="mx-auto"
                alt="The YouTube logo."
              />
              <h1 className="text-lg">
                <b>Summer 2022</b>: YouTube - Software Engineer Intern
              </h1>
              <h3>
                I was a SWE intern on the Youtube TV Serving Infrastructure
                team, where I got to develop some microservices in C++ for graph
                data processing, and now these services run on millions of
                videos. I also got a lot better at basketball during my downtime
                at work!
              </h3>
            </div>
            <div className="grid grid-flow-row lg:grid-flow-col gap-8 mx-auto container w-full pb-3">
              <Image
                src="/citadel.png"
                width={50}
                height={50}
                className="mx-auto"
                alt="The Citadel logo."
              />
              <h1 className="text-lg">
                <b>Winter 2022</b>: Citadel - Software Engineer Intern
              </h1>
              <h3>
                I took a semester off from school to work as a SWE intern at
                Citadel, a hedge fund in New York, where I developed some cool
                performant systems using C++, Java, and Python while learning a
                lot about the financial industry. I got to see a lot of cloud
                computing ideas in practice here, and had a lot of fun hanging
                out in the city. This made me realize I wanted to return to New
                York for full time.
              </h3>
            </div>
            <div className="grid grid-flow-row lg:grid-flow-col gap-8 mx-auto container w-full pb-3">
              <Image
                src="/google.png"
                width={50}
                height={50}
                className="mx-auto"
                alt="The Google logo."
              />
              <h1 className="text-lg">
                <b>Summer 2021</b>: Google - Software Engineer Intern
              </h1>
              <h3>
                During the COVID-19 pandemic, I worked remotely for Google on
                the Ads Advanced Solutions team. Here, I got to implement a lot
                of programming languages ideas I learned in school in practice,
                where I helped instrument a parser for a custom Python-like
                language.
              </h3>
            </div>
          </div>
        </div>
        <div className="grid mx-auto flex justify-center items-center grid-flow-row lg:grid-flow-col gap-8 container md:px-32 w-full pl-3 pr-3 pb-3 dark:text-zinc-100">
          <div>
            <div className="col-span-2">
              <AttentionGrabbingHeading
                text="Previous Work"
                hasPeriod={false}
              />
            </div>
            <div className="grid grid-flow-row lg:grid-flow-col gap-8 mx-auto container w-full pb-3">
              <ProjectCard
                name="Cascade"
                description={[
                  <a
                    target="_blank"
                    className="underline text-blue-500 dark:text-blue-300"
                    rel="noopener noreferrer"
                    href="https://github.com/Derecho-Project/cascade"
                    key="cascade-1"
                  >
                    Cascade
                  </a>,
                  ' is a C++17 cloud application framework powered by optimized ',
                  <a
                    target="_blank"
                    className="underline text-blue-500 dark:text-blue-300"
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
                  'To ease the isolation of the pandemic back in Spring 2020, I made this multiplayer web game which implements a classic poker game to play with friends and family. Built with socket.io, Node.js, and Express. ',
                  <a
                    target="_blank"
                    className="underline text-blue-500 dark:text-blue-300"
                    rel="noopener noreferrer"
                    href="https://distributed-texasholdem.onrender.com/"
                    key="poker-1"
                  >
                    Link to Website
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
                    className="underline text-blue-500 dark:text-blue-300"
                    rel="noopener noreferrer"
                    href="https://ai.facebook.com/blog/-detectron2-a-pytorch-based-modular-object-detection-library-/"
                    key="fitme-1"
                  >
                    Facebook AI&apos;s Detectron2
                  </a>,
                  ' which is based on Mask R-CNN. We then connected this with a TypeScript React webapp allowing users to upload and segment fit images. ',
                  <a
                    target="_blank"
                    className="underline text-blue-500 dark:text-blue-300"
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
