import { dbService } from './firebase';

type Post = {
  postId: string;
  title: string;
  body: string;
  like: number;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
};

export function savePost(postData: Post) {
  const newPostKey = dbService.ref().child('posts').push().key;

  dbService.ref().update({ [`/posts/${newPostKey}`]: postData });
}

export function readPost(postId: string) {
  const postRef = dbService.ref(`posts/${postId}`);
  let result;

  postRef.on('value', (snapshot) => {
    result = snapshot.val();
  });

  return result;
}
