import PostType from '@/types/PostType';

import { dbService } from './firebase';

type Post = {
  title: string;
  body: string;
  like: number;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
};

export function createPost(postData: Post) {
  const newPostKey = dbService.ref().child('posts').push().key;

  const newPostData = { ...postData, postId: newPostKey };

  dbService.ref(`posts/${newPostKey}`).set(newPostData, (error) => {
    console.error(error);
  });
}

export async function readPost(postId: string): Promise<PostType[]> {
  const postRef = dbService.ref(`posts/${postId}`);

  const snapshot = await postRef.get();

  return snapshot.val();
}

export async function readAllPost(): Promise<PostType[]> {
  const postRef = dbService.ref('posts/');

  const snapshot = await postRef.get();

  return Object.values(snapshot.val());
}

export function updatePost(postData: Post & { postId: string }) {
  dbService.ref().update({ [`/posts/${postData.postId}`]: postData });
}

export function deletePost(postId: string) {
  dbService.ref().child(`posts/${postId}`).remove();
}
