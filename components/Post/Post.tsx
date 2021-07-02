import Link from 'next/link';

export type Props = {
  post: {
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      excerpt: string;
      coverImage: string;
    };
  };
};

export default function Post({ post }: Props) {
  const {
    slug,
    frontmatter: { coverImage, date, title, excerpt },
  } = post;

  return (
    <li key={slug}>
      <img src={coverImage} alt='' />
      <div>Posted on {date}</div>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <Link href={`/blog/${slug}`}>
        <a href='replace'>Read More</a>
      </Link>
    </li>
  );
}
