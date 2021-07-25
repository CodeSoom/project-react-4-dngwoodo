import { dbService } from './firebase';

type Post = {
  title: string;
  body: string;
  like: number;
  thumbnail: string;
};

export function savePost(postData: Post) {
  const newPostKey = dbService.ref().child('posts').push().key;

  return dbService.ref().update({ [`/posts/${newPostKey}`]: postData });
}

export default {};
