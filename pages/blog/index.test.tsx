import { render } from '@testing-library/react';

import POSTS from '@/fixtures/posts';

import Home from './index.page';

jest.mock('@/services/post-repository');

describe('Home', () => {
  it('renders title, date of posts', () => {
    const { getByText } = render(<Home posts={POSTS} />);

    expect(getByText('NextJS')).toBeInTheDocument();
    expect(getByText('2021-07-20')).toBeInTheDocument();
  });
});
