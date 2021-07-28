import Image from 'next/image';
import Link from 'next/link';
import marked from 'marked';
import { CgArrowLeftO, CgTimelapse } from 'react-icons/cg';

import Comment from '@/components/Comment';
import {
  Container,
  ImageContainer,
  MetaData,
  MetaDataContainer,
  Tags,
  Title,
  Top,
  TopContainer,
  Content,
} from './style';

type Props = {
  postId: string;
  title: string;
  createdAt: string;
  thumbnail: string;
  body: string;
};

const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

export default function PostDetail({
  postId,
  title,
  createdAt,
  thumbnail,
  body,
}: Props) {
  return (
    <Container>
      <ImageContainer
        layoutId={`blog-thumbnail-${postId}`}
        initial={{
          width: '50%',
          height: '475px',
        }}
        animate={{
          width: '100%',
          transition,
        }}
      >
        <Image
          alt='blog-thumbnail'
          src={thumbnail}
          layout='fill'
          objectFit='cover'
        />
      </ImageContainer>

      <TopContainer>
        <Top>
          <MetaDataContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                ...transition,
                delay: 0.6,
              },
            }}
          >
            <Link href='/'>
              <a href='replace'>
                <CgArrowLeftO />
              </a>
            </Link>
            <MetaData>
              <p>{createdAt}</p>
              <div>
                <CgTimelapse />
                <p>5min read</p>
              </div>
            </MetaData>
          </MetaDataContainer>

          <Title
            initial={{ y: 400 }}
            animate={{ y: 0, transition: { delay: 0.5 } }}
          >
            {title}
          </Title>

          <Tags
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                ...transition,
                delay: 0.6,
              },
            }}
          >
            <li>
              <span>React</span>
            </li>
            <li>
              <span>Vue.js</span>
            </li>
            <li>
              <span>JavaScript</span>
            </li>
            <li>
              <span>Scss</span>
            </li>
          </Tags>
        </Top>
      </TopContainer>

      {/* eslint-disable-next-line react/no-danger */}
      <Content
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
        dangerouslySetInnerHTML={{ __html: marked(body) }}
      />
      <Comment />
    </Container>
  );
}
