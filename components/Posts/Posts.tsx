import styled from '@emotion/styled';

import PostType from '@/types/PostType';

import mediaquey from '@/utils/mediaquery';

import Post from '@/components/Post';

type Props = {
  posts: PostType[];
};

const Cards = styled.ul(
  mediaquey({
    display: ['block', 'flex'],
    flexWrap: 'wrap',
  })
);

export default function Posts({ posts }: Props) {
  return (
    <Cards>
      {posts && posts.map((post) => <Post key={post.slug} post={post} />)}
    </Cards>
  );
}
