import AttentionGrabbingHeading from '@/components/AttentionGrabbingHeading';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Tag from '@/components/Tag';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { getNonZeroIndexedDateString } from '../blog';

interface PostData {
  title: string;
  date: string;
  blurb: string;
  leadingImagePath: string;
  hashtags: string[];
  contentHtml: string;
}

const Post: React.FC<{ data: PostData }> = ({ data }) => {
  const { title, date, hashtags, blurb, leadingImagePath, contentHtml } = data;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className="min-h-screen hero container max-w-screen-xl mx-auto pb-10 mt-8">
        <div className="gap-8 container md:px-32 w-full pl-3 pr-3 pb-3">
          <div>
            <AttentionGrabbingHeading text={title} hasPeriod={false} />
          </div>
          <h2 className="dark:text-zinc-100 mb-3">
            posted on {getNonZeroIndexedDateString(date)}
          </h2>
          {hashtags.map((tag, idx) => (
            <Tag text={tag} hasHashtag key={idx} />
          ))}
          <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-zinc-100">
            {blurb}
          </blockquote>
          <div className="w-full h-80 relative mb-3">
            <Image
              src={leadingImagePath}
              alt="Leading image for the blog post."
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div
            className="dark:text-zinc-100 [&>p]:mb-3"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
          <Link
            href="/blog"
            className="text-blue-500 dark:text-blue-300 underline"
          >
            <h4>back to blog listing</h4>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // Fetch necessary data for the blog post using params.id
  const { params } = context;
  const id = params?.id as string | undefined;
  const data = await getPostData(id);
  return {
    props: {
      data,
    },
  };
};
