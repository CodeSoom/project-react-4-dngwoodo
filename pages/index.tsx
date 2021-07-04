import fs from 'fs';
import path from 'path';

import Head from 'next/head';
import matter from 'gray-matter';

import PostType from '@/types/PostType';
import { GetStaticProps } from 'next';

import Posts from '@/components/Posts';

export type Props = {
  posts: PostType[];
};

export default function Home({ posts }: Props) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>
      <Posts posts={posts} />
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
