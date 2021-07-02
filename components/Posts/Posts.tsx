import Post from '@/components/Post';

import { Props } from '@/pages/index';

export default function Posts({ posts }: Props) {
  return (
    <ul>
      {posts && posts.map((post) => <Post key={post.slug} post={post} />)}
    </ul>
  );
}
