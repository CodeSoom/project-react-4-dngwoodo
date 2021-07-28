import { render } from '@testing-library/react';

import PostDetail from './PostDetail';

describe('PostDetail', () => {
  it('renders date, title, tags, content', () => {
    const { getByText, container } = render(
      <PostDetail
        postId=''
        title='NextJS'
        createdAt='2021-07-20'
        thumbnail='/images/posts/img1.jpg'
        body='NextJs Info'
      />
    );

    expect(getByText('NextJS')).toBeInTheDocument();
    expect(getByText('2021-07-20'));
    expect(container).toContainHTML('<img');
    expect(getByText('NextJs Info'));
  });
});
