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
  const { postId, thumbnail, title, body, createdAt } = post;

  return (
    <Container>
      <Link href={`/blog/${postId}`}>
        <a href='replace'>
          <Card>
            <CardTop layoutId={`blog-thumbnail-${postId}`}>
              <Image src={thumbnail} alt='thumbnail' layout='fill' />
              <ColoredShadow backgroundImage={thumbnail} />
            </CardTop>
            <CardMiddle>
              <h6>React</h6>
              <h4>{title}</h4>
              <p>{body}</p>
            </CardMiddle>
            <CardBottom>
              <span>{createdAt}</span>
              <span>5 min read</span>
            </CardBottom>
          </Card>
        </a>
      </Link>
    </Container>
  );
}
