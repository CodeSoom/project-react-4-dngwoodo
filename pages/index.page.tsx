import fs from 'fs';
import path from 'path';

import styled from '@emotion/styled';
import Head from 'next/head';
import matter from 'gray-matter';

import PostType from '@/types/PostType';
import { GetStaticProps } from 'next';

import Posts from '@/components/Posts';

export type Props = {
  posts: PostType[];
};

const Container = styled.div({
  maxWidth: '1300px',
  margin: '0 auto',
  padding: '20px',
});

export default function Home({ posts }: Props) {
  return (
    <Container>
      <Head>
        <title>Dev Blog</title>
      </Head>
      <Posts posts={posts} />
    </Container>
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
