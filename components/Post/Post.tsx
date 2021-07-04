import PostType from '@/types/PostType';

import Image from 'next/image';
import Link from 'next/link';

export type Props = {
  post: PostType;
};

export default function Post({ post }: Props) {
  const {
    slug,
    frontmatter: { coverImage, date, title, excerpt },
  } = post;

  return (
    <li>
      <Image src={coverImage} alt='thumbnail' width={500} height={500} />
      <div>Posted on {date}</div>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <Link href={`/blog/${slug}`}>
        <a href='replace'>Read More</a>
      </Link>
    </li>
  );
}
