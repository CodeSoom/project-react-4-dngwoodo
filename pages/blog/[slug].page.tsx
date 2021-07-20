import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import PostType from '@/types/PostType';
import { GetStaticPaths, GetStaticProps } from 'next';

import PostDetail from '@/components/PostDetail';

type Props = PostType & { content: string };

export default function PostPage({ frontmatter, content }: Props) {
  const { title, date, coverImage } = frontmatter;

  return (
    <PostDetail
      title={title}
      date={date}
      coverImage={coverImage}
      content={content}
    />
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slug } = params!;

  const markdownWithMeta = fs.readFileSync(
    path.join('posts', `${slug}.md`),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  };
};
