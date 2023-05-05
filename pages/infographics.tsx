import Navbar from '../components/Navbar';
import Head from 'next/head';
import Footer from '../components/Footer';
import React from 'react';
import Link from 'next/link';
import AttentionGrabbingHeading from '@/components/AttentionGrabbingHeading';
import Tag from '@/components/Tag';
import { getSortedPostsData } from '../lib/posts';
import Image from 'next/image';

export default function Infographics() {
  return (
    <>
      <Head>
        <title>Peter Wu | Infographics</title>
      </Head>
      <Navbar />
      <div className="min-h-screen hero container max-w-screen-xl mx-auto pb-10 mt-8">
        <div className="gap-8 container md:px-32 w-full pl-3 pr-3 pb-3">
          <div>
            <AttentionGrabbingHeading text="Infographics" hasPeriod={false} />
            <p className="mt-2 mb-5 dark:text-zinc-100">
              Here you&apos;ll find some useful infographics I&apos;ve used to
              help learn certain things. Hover on the images to get the alt text
              (yay accessibility).
            </p>

            <h1 className="text-2xl dark:text-zinc-100 mb-2">
              Figure 1: How Node.js is single-threaded.
            </h1>
            <Image
              src="/nodejseventloop.png"
              width={1000}
              height={1000}
              alt="An infographic describing the execution flow of a Node.js application. Node.js is markedly single threaded, so there is only one event loop, with no parallelization. That being said, it uses callbacks, which allow for asynchronous computing - a request that may take a lot of file I/O can be done in the background and Node.js can go onto the next thing before the response is received for that I/O request. Once the operation is complete, a callback is triggered back to the original request."
            />
            <h1 className="text-2xl dark:text-zinc-100 mt-8 mb-2">
              Figure 2: How the C++ new keyword works
            </h1>
            <Image
              src="/newkeyword.png"
              className="mx-auto"
              width={800}
              height={1000}
              alt="This infographic lengthily describes how the C++ new keyword works. Essentially, it boils down to returning the memory address of the new object, which is simply an operator defined within a C++ class. This operator should allocate memory using malloc(), a C primitive which allocates enough storage in the RAM for the pointer data. The figure stresses that since you can override the behavior of the new() operator, you cannot assume the data lives on the heap, but the developer could make anything happen."
            />

            <h1 className="text-2xl dark:text-zinc-100 mt-8 mb-2">
              Figure 3: The State of JavaScript frameworks (StackOverflow)
            </h1>
            <Image
              src="/stateofjs.png"
              width={1000}
              height={1000}
              alt="The state of JavaScript frameworks is succinctly described in this diagram, which shows each framework and what percentage of developers that took the StackOverflow survey know the framework as a separate line in the years 2016 to 2020. You can see that React begins with a 53% majority in 2016, with Angular playing second fiddle, but then reaches 80% dominance by 2019. Angular gains as well, but is only known by 58% in 2019. In 2020, we see a lot of new frameworks coming out in the scene, most notably Svelte."
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
