import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import marked from 'marked';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import PostType from '@/types/PostType';
import { GetStaticPaths, GetStaticProps } from 'next';
import styled from '@emotion/styled';

type Props = PostType & { content: string };

const ImageContainer = styled(motion.div)({
  width: '100%',
  height: '300px',
  position: 'relative',
});

export default function PostPage({ frontmatter, content }: Props) {
  const { title, date, coverImage } = frontmatter;

  return (
    <>
      <ImageContainer layoutId='blog-thumbnail'>
        <Image
          alt='blog-thumbnail'
          src={coverImage}
          layout='fill'
          objectFit='cover'
        />
      </ImageContainer>

      <div>
        <div>React</div>
        <p>{date}</p>
        <Link href='/'>
          <a href='replace'>Go Back</a>
        </Link>
      </div>

      <h1>{title}</h1>

      {/* eslint-disable-next-line react/no-danger */}
      <p dangerouslySetInnerHTML={{ __html: marked(content) }} />
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
