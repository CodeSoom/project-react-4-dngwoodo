import PostType from '@/types/PostType';

import Post from '@/components/Post';

type Props = {
  posts: PostType[];
};

export default function Posts({ posts }: Props) {
  return (
    <ul>
      {posts && posts.map((post) => <Post key={post.slug} post={post} />)}
    </ul>
  );
}
