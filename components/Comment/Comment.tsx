import { useState } from 'react';
import { HiOutlineHeart } from 'react-icons/hi';
import Image from 'next/image';

import {
  Container,
  Title,
  Comments,
  UserImage,
  CommentTop,
  CommentMiddle,
  CommentBottom,
  CommentInput,
} from './style';

export default function Comment() {
  const [isShowReply, setIsShowReply] = useState<boolean>(false);

  return (
    <Container>
      <Title>
        <h2>Comments</h2>
        <span>1</span>
      </Title>
      <Comments>
        <li>
          <UserImage>
            <Image
              src='/images/posts/img1.jpg'
              alt=''
              layout='fill'
              objectFit='cover'
            />
          </UserImage>
          <div>
            <CommentTop>
              <span>dngwoodo</span>﹒<span>5 min ago</span>
            </CommentTop>
            <CommentMiddle>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos corrupti obcaecati numquam nostrum nisi possimus
              beatae eaque veniam explicabo ea consequuntur, recusandae labore
              illo, eos quidem reiciendis aperiam! Reprehenderit, sunt!
            </CommentMiddle>
            <CommentBottom>
              <div>
                <span
                  onClick={() => {
                    setIsShowReply(!isShowReply);
                  }}
                  role='button'
                  tabIndex={0}
                  aria-hidden='true'
                >
                  Reply
                </span>
                <span>Like?</span>
              </div>
              <div>
                <HiOutlineHeart />
                <span>24</span>
              </div>
            </CommentBottom>
            <CommentInput isShowReply={isShowReply}>
              <textarea cols={30} rows={5} placeholder='Type a comment...' />
              <button type='button'>Reply</button>
            </CommentInput>
          </div>
        </li>
      </Comments>
      <CommentInput>
        <textarea cols={30} rows={5} placeholder='Type a comment...' />
        <button type='button'>Reply</button>
      </CommentInput>
    </Container>
  );
}
