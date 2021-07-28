import PostType from '@/types/PostType';
import { GetStaticPaths, GetStaticProps } from 'next';

import PostDetail from '@/components/PostDetail';
import { readAllPost, readPost } from '@/services/post-repository';

type Props = {
  post: PostType;
};

export default function PostPage({ post }: Props) {
  const { postId, thumbnail, title, body, createdAt } = post;

  return (
    <PostDetail
      postId={postId}
      title={title}
      createdAt={createdAt}
      thumbnail={thumbnail}
      body={body}
    />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await readAllPost();

  const paths = posts.map(({ postId }) => ({
    params: {
      id: postId,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!;

  const post = await readPost(id as string);

  return {
    props: {
      post,
    },
  };
};
