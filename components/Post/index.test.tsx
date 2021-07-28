import { render } from '@testing-library/react';

import POSTS from '@/fixtures/posts';

import Post from './Post';

describe('Post', () => {
  it('renders image, title, date, excerpt, link of Post', () => {
    const { container, getByText, getByRole } = render(
      <Post post={POSTS[0]} />
    );

    expect(getByRole('heading', { name: 'NextJS' })).toBeInTheDocument();
    expect(container).toContainHTML('<img');
    expect(getByText('2021-07-20')).toBeInTheDocument();
    expect(getByText('NextJs Info')).toBeInTheDocument();
  });
});
