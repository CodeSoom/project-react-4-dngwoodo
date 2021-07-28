import styled from '@emotion/styled';

import PostType from '@/types/PostType';

import mediaquery from '@/utils/mediaquery';

import Post from '@/components/Post';

type Props = {
  posts: PostType[];
};

const Cards = styled.ul(
  mediaquery({
    display: ['block', 'flex'],
    flexWrap: 'wrap',
  })
);

export default function Posts({ posts }: Props) {
  return (
    <>
      <Cards>
        {/* TODO: post.createdAt으로 변경  */}
        {posts && posts.map((post) => <Post key={post.title} post={post} />)}
      </Cards>
    </>
  );
}
