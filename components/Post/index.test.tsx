import { render } from '@testing-library/react';

import POSTS from '@/fixtures/posts';

import Post from './Post';

describe('Post', () => {
  it('renders image, title, date, excerpt, link of Post', () => {
    const { container, getByText, getByRole } = render(
      <Post post={POSTS[0]} />
    );

    expect(
      getByRole('heading', { name: 'Writing Great Unit Tests' })
    ).toBeInTheDocument();
    expect(container).toContainHTML('<img');
    expect(getByText('Posted on March 12, 2021')).toBeInTheDocument();
    expect(
      getByText(
        'We will look at 10 simple tips and tricks on writing unit tests in JavaScript'
      )
    ).toBeInTheDocument();
    expect(getByRole('link', { name: 'Read More' })).toBeInTheDocument();
  });
});
