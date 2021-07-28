import styled from '@emotion/styled';
import Head from 'next/head';

import PostType from '@/types/PostType';
import { GetStaticProps } from 'next';

import Posts from '@/components/Posts';
import { readAllPost } from '@/services/post-repository';

export type Props = {
  posts: PostType[];
};

const Container = styled.div({
  maxWidth: '1300px',
  margin: '0 auto',
  padding: '20px',
  paddingTop: '150px',
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
  const posts = await readAllPost();

  return { props: { posts } };
};
