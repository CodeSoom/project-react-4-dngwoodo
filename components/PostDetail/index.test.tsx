import { render } from '@testing-library/react';

import PostDetail from './PostDetail';

describe('PostDetail', () => {
  it('renders date, title, tags, content', () => {
    const { getByText, container } = render(
      <PostDetail
        slug=''
        title='NextJS'
        date='2021-07-20'
        coverImage='/images/posts/img3.jpg'
        content='NextJs Info'
      />
    );

    expect(getByText('NextJS')).toBeInTheDocument();
    expect(getByText('2021-07-20'));
    expect(container).toContainHTML('<img');
    expect(getByText('NextJs Info'));
  });
});
