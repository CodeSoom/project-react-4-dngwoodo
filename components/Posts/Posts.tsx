import styled from '@emotion/styled';
import { motion } from 'framer-motion';

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

const MotionDiv = styled(motion.div)({
  width: '300px',
  height: '300px',
  background: 'red',
});

export default function Posts({ posts }: Props) {
  return (
    <>
      <Cards>
        {posts && posts.map((post) => <Post key={post.slug} post={post} />)}
      </Cards>
      <MotionDiv
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
      />
    </>
  );
}
