import { Props } from '@/pages/index';

export default function Posts({ posts }: Props) {
  return (
    <ul>
      {posts &&
        posts.map((post) => <li key={post.slug}>{post.frontmatter.title}</li>)}
    </ul>
  );
}
