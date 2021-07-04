import { render } from '@testing-library/react';

import POSTS from '@/fixtures/posts';

import Home from '.';

describe('Home', () => {
  it('renders post titles', () => {
    const { getByText } = render(<Home posts={POSTS} />);

    expect(getByText('Writing Great Unit Tests')).toBeInTheDocument();
  });
});
