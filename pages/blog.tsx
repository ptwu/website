import Navbar from '../components/Navbar';
import Head from 'next/head';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import Link from 'next/link';
import AttentionGrabbingHeading from '@/components/AttentionGrabbingHeading';
import Tag from '@/components/Tag';
import { getSortedPostsData } from '../lib/posts';

interface AllPostsData {
  id: string;
  date: string;
  title: string;
  hashtags: string[];
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

type Props = {
  allPostsData: AllPostsData[];
};

export const getNonZeroIndexedDateString = (iso8601String: string): string => {
  const [year, month, day] = iso8601String.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

export default function Blog({ allPostsData }: Props) {
  const [filteringOnTag, setFilteringOnTag] = useState<string | null>(null);

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
              keep up to date over the years.
            </p>
          </div>

          {filteringOnTag && (
            <div className="mt-5 mb-0">
              <Tag text={filteringOnTag} hasHashtag />
              <button
                onClick={() => setFilteringOnTag(null)}
                className="text-black dark: text-zinc-100"
              >
                ×
              </button>
            </div>
          )}

          {/* render posts in a data-driven way */}
          {allPostsData
            .filter(
              ({ hashtags }) =>
                !filteringOnTag || hashtags.includes(filteringOnTag),
            )
            .map(({ id, title, date, hashtags }, idx) => (
              <React.Fragment key={`blog-post-${idx}`}>
                <Link href="/blog/[id]" as={`/blog/${id}`}>
                  <h2 className="text-xl font-bold text-purple-900 mt-8 underline dark:text-fuchsia-200">
                    {title}
                  </h2>
                </Link>
                <p className="dark:text-zinc-100 mb-1">
                  posted on {getNonZeroIndexedDateString(date)}
                </p>
                {hashtags.map((tag, idx) => (
                  <Tag
                    text={tag}
                    hasHashtag
                    key={idx}
                    clickHandler={(tagString: string) =>
                      setFilteringOnTag(tagString)
                    }
                  />
                ))}
              </React.Fragment>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
