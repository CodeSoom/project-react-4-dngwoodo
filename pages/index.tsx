import fs from 'fs';
import path from 'path';

import Head from 'next/head';
import matter from 'gray-matter';

import Posts from '@/components/Posts';

import { GetStaticProps } from 'next';

export type Props = {
  posts: {
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      excerpt: string;
      coverImage: string;
    };
  }[];
};

export default function Home({ posts }: Props) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>
      <Posts posts={posts}/>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return { slug, frontmatter };
  });

  return { props: { posts } };
};
