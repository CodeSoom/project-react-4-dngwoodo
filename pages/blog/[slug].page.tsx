import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import marked from 'marked';
import Image from 'next/image';
import Link from 'next/link';

import PostType from '@/types/PostType';
import { GetStaticPaths, GetStaticProps } from 'next';

type Props = PostType & { content: string };

export default function PostPage({ frontmatter, content }: Props) {
  const { title, date, coverImage } = frontmatter;

  return (
    <>
      <Link href='/'>
        <a href='replace'>Go Back</a>
      </Link>
      <div>
        <h1>{title}</h1>
        <div>Posted on {date}</div>
        <Image src={coverImage} alt='' width={500} height={500} />
        <div>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </div>
      </div>
    </>
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
