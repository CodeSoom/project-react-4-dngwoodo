import PostType from '@/types/PostType';

import Image from 'next/image';
import Link from 'next/link';

import {
  Container,
  Card,
  CardTop,
  ColoredShadow,
  CardMiddle,
  CardBottom,
} from './style';

export type Props = {
  post: PostType;
};

export default function Post({ post }: Props) {
  const {
    slug,
    frontmatter: { coverImage, date, title, excerpt },
  } = post;

  return (
    <Container>
      <Link href={`/blog/${slug}`} passHref>
        <Card>
          <CardTop>
            <Image src={coverImage} alt='thumbnail' layout='fill' />
            <ColoredShadow backgroundImage={coverImage} />
          </CardTop>
          <CardMiddle>
            <h6>React</h6>
            <h4>{title}</h4>
            <p>{excerpt}</p>
          </CardMiddle>
          <CardBottom>
            <span>{date}</span>
            <span>5 min read</span>
          </CardBottom>
        </Card>
      </Link>
    </Container>
  );
}
