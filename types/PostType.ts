type PostType = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    coverImage: string;
  };
};

export default PostType;
