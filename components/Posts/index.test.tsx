import { render } from '@testing-library/react';

import POSTS from '@/fixtures/posts';

import Posts from './Posts';

describe('Posts', () => {
  it('renders image, title, date, excerpt, link of posts', () => {
    const { container, getByText, getByRole } = render(<Posts posts={POSTS} />);

    expect(getByRole('heading', { name: 'NextJS' })).toBeInTheDocument();
    expect(container).toContainHTML('<img');
    expect(getByText('2021-07-20')).toBeInTheDocument();
    expect(getByText('NextJs Info')).toBeInTheDocument();
  });
});
