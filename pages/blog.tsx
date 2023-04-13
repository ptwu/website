import Navbar from '../components/Navbar';
import Head from 'next/head';
import Footer from '../components/Footer';
import React from 'react';
import Link from 'next/link';
import AttentionGrabbingHeading from '@/components/AttentionGrabbingHeading';
import Tag from '@/components/Tag';

type BlogPost = {
  title: string;
  date: Date;
  hashtags: string[];
};

const posts: BlogPost[] = [
  {
    title: 'Why my most-starred GitHub repo deserves to live in infamy',
    date: new Date(2023, 3, 15),
    hashtags: ['node.js', 'webdev'],
  },
  {
    title: 'Tiramisu',
    date: new Date(2023, 1, 22),
    hashtags: ['food'],
  },
  {
    title: 'Comparing C++ and C# interop methods',
    date: new Date(2023, 1, 1),
    hashtags: ['c++', 'c#', 'systems', 'research'],
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Peter Wu | Blog</title>
      </Head>
      <Navbar />
      <div className="min-h-screen hero container max-w-screen-xl mx-auto pb-10 mt-8">
        <div className="gap-8 container md:px-32 w-full pl-3 pr-3 pb-3">
          <div>
            <AttentionGrabbingHeading text="Blog" hasPeriod={false} />
            <p className="mt-2 dark:text-zinc-100">
              Here you&apos;ll find some misc. writings which I may or may not
              keep up-to-date over the years.
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-10 dark:text-zinc-100">
            Preview of future articles to come (not written yet)
          </h3>
          {/* render posts in a data-driven way */}
          {posts.map(({ title, date, hashtags }, idx) => (
            <React.Fragment key={`blog-post-${idx}`}>
              <Link href="/blog">
                <h2 className="text-xl font-bold text-purple-900 mt-8 underline dark:text-fuchsia-200">
                  {title}
                </h2>
              </Link>
              <p className="dark:text-zinc-100">
                posted on {date.toLocaleDateString()}
              </p>
              {hashtags.map((tag, idx) => (
                <Tag text={tag} hasHashtag key={idx} />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
