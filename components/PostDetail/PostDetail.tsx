import Image from 'next/image';
import Link from 'next/link';
import marked from 'marked';
import {
  Container,
  ImageContainer,
  MetaData,
  MetaDataContainer,
  Tags,
  Title,
  Top,
  TopContainer,
} from './style';

type Props = {
  title: string;
  date: string;
  coverImage: string;
  content: string;
};

export default function PostDetail({
  title,
  date,
  coverImage,
  content,
}: Props) {
  return (
    <Container>
      <ImageContainer layoutId='blog-thumbnail'>
        <Image
          alt='blog-thumbnail'
          src={coverImage}
          layout='fill'
          objectFit='cover'
        />
      </ImageContainer>

      <TopContainer>
        <Top>
          <MetaDataContainer>
            <MetaData>
              <p>{date}</p>
              <p>5min read</p>
            </MetaData>

            <Link href='/'>
              <a href='replace'>Go Back</a>
            </Link>
          </MetaDataContainer>

          <Title>
            {title.split('').map((letter, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <span key={index}>{letter}</span>
            ))}
          </Title>

          <Tags>
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
      <p dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Container>
  );
}
