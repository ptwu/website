import Navbar from '../components/Navbar';
import Head from 'next/head';
import Footer from '../components/Footer';
import React from 'react';
import Link from 'next/link';
import AttentionGrabbingHeading from '@/components/AttentionGrabbingHeading';
import Tag from '@/components/Tag';
import { getSortedPostsData } from '../lib/posts';
import ProjectCard from '@/components/ProjectCard';
import Poker from '@/assets/img/poker.jpg';
import Lec1 from '@/assets/img/lec1.png';
import Lec2 from '@/assets/img/lec2.png';
import Lec3 from '@/assets/img/lec3.png';
import Fitme from '@/assets/img/fitme.png';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Peter Wu | Teaching</title>
      </Head>
      <Navbar />
      <div className="min-h-screen hero container max-w-screen-xl mx-auto pb-10 mt-8">
        <div className="gap-8 container md:px-32 w-full pl-3 pr-3 pb-3">
          <div>
            <AttentionGrabbingHeading text="Teaching" hasPeriod={false} />
            <p className="mt-2 mb-5 dark:text-zinc-100">
              At Cornell, I was previously an undergraduate TA for two classes
              (CS 3110: Functional Programming, and CS 4780: Machine Learning).
              More notably, I also taught a student-taught class of 30 students
              (INFO 1998: Trends in Modern Web Development) in Spring 2021. Here
              are some slides with speaker notes that I created for the class.
            </p>
            <p className="mt-2 mb-5 dark:text-zinc-100">
              The website for the class during this semester is at{' '}
              <a
                href="https://webdev.cornelldti.org/docs/2021sp/introduction"
                className="underline text-blue-500 dark:text-blue-300"
                rel="noopener noreferrer"
              >
                https://webdev.cornelldti.org/docs/2021sp/introduction
              </a>
              .
            </p>
          </div>
          <div className="grid grid-flow-row lg:grid-flow-col gap-8 mx-auto container w-full pb-3 ">
            <ProjectCard
              name="Lecture 1"
              description={[
                'In lecture 1, we give an intro to TypeScript. ',
                <a
                  target="_blank"
                  className="underline text-blue-500 dark:text-blue-300"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/presentation/d/1Wio16ZI8E5bF3R-RrDpQx9ePqjHIbBvGYyOVgE9MESA/edit?usp=sharing/"
                  key="slides-1"
                >
                  Link to Slides
                </a>,
              ]}
              image={Lec1}
              imageAltText="Image of Cascade."
              tags={['typescript']}
            />
            <ProjectCard
              name="Lecture 2"
              description={[
                'In Lecture 2, we explain what Node.js is and introduce the students to HTTP methods. ',
                <a
                  target="_blank"
                  className="underline text-blue-500 dark:text-blue-300"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/presentation/d/1jk3I6avNSea4GVDafBIsm_tx21WDPPen0D67Shld4dg/edit?usp=sharing/"
                  key="slides-2"
                >
                  Link to Slides
                </a>,
              ]}
              image={Lec2}
              imageAltText="Image of Lecture 2, which focuses around Node.js and HTTP Methods."
              tags={['node.js', 'http']}
            />
            <ProjectCard
              name="Lecture 3"
              description={[
                'In lecture 3, we give an intro to databases, notably Firebase, which is a NoSQL database. ',
                <a
                  target="_blank"
                  className="underline text-blue-500 dark:text-blue-300"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/presentation/d/1CuHHTdguCDM3D4vZsoity0O8L43vLeTxvOACjnvem0A/edit?usp=sharing"
                  key="slides-3"
                >
                  Link to Slides
                </a>,
              ]}
              image={Lec3}
              imageAltText="Image of Lecture 3, which focuses around databases and Firebase."
              tags={['databases', 'firebase']}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
