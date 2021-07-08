import { render } from '@testing-library/react';

import POSTS from '@/fixtures/posts';

import Posts from './Posts';

describe('Posts', () => {
  it('renders image, title, date, excerpt, link of posts', () => {
    const { container, getByText, getByRole } = render(<Posts posts={POSTS} />);

    expect(
      getByRole('heading', { name: 'Writing Great Unit Tests' })
    ).toBeInTheDocument();
    expect(container).toContainHTML('<img');
    expect(getByText('March 12, 2021')).toBeInTheDocument();
    expect(
      getByText(
        'We will look at 10 simple tips and tricks on writing unit tests in JavaScript'
      )
    ).toBeInTheDocument();
  });
});
