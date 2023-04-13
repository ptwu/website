import Navbar from '../components/Navbar';
import Head from 'next/head';
import Footer from '../components/Footer';
import React from 'react';
import Link from 'next/link';

type BlogPost = {
  title: string;
  date: Date;
  hashtags: string[];
};

const posts: BlogPost[] = [
  {
    title: 'How to speed up Java code',
    date: new Date(2023, 3, 15),
    hashtags: ['java', 'performance'],
  },
  {
    title: 'Tiramisu recipe',
    date: new Date(2023, 1, 22),
    hashtags: ['food'],
  },
  {
    title: 'Somehow getting C++ and C# interop to work',
    date: new Date(2023, 1, 1),
    hashtags: ['c++', 'c#', 'research'],
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
            <h1 className="font-sourcepro text-5xl font-bold text-purple-900">
              Blog
            </h1>
            <p className="mt-2">
              Here you&apos;ll find some misc. writings which I may or may not
              keep up-to-date over the years.
            </p>
          </div>

          {/* render posts in a data-driven way */}
          {posts.map(({ title, date, hashtags }, idx) => (
            <React.Fragment key={`blog-post-${idx}`}>
              <Link href="/blog">
                <h2 className="text-xl font-bold text-purple-900 mt-8 underline">
                  {title}
                </h2>
              </Link>
              <p>posted on {date.toLocaleDateString()}</p>
              {hashtags.map((tag, idx) => (
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 mr-2 mb-2 cursor-pointer"
                  key={`tag-${idx}`}
                >
                  {'#' + tag}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
