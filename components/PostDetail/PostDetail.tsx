import Image from 'next/image';
import Link from 'next/link';
import marked from 'marked';
import { CgArrowLeftO, CgTimelapse } from 'react-icons/cg';
import {
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
    <>
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
            <Link href='/'>
              <a href='replace'>
                <CgArrowLeftO />
              </a>
            </Link>
            <MetaData>
              <p>{date}</p>
              <div>
                <CgTimelapse />
                <p>5min read</p>
              </div>
            </MetaData>
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
      <Content dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </>
  );
}
