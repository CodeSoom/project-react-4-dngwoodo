import { render } from '@testing-library/react';

import POSTS from '@/fixtures/posts';

import Home from './index.page';

describe('Home', () => {
  it('renders title, date of posts', () => {
    const { getByText } = render(<Home posts={POSTS} />);

    expect(getByText('Writing Great Unit Tests')).toBeInTheDocument();
    expect(getByText('March 12, 2021')).toBeInTheDocument();
  });
});
