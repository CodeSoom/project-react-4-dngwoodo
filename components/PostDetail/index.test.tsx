import { render } from '@testing-library/react';

import PostDetail from './PostDetail';

describe('PostDetail', () => {
  it('renders date, title, tags, content', () => {
    const TITLE = 'NextJS';

    const { getByText, container } = render(
      <PostDetail
        title={TITLE}
        date='2021-07-20'
        coverImage='/images/posts/img3.jpg'
        content='NextJs Info'
      />
    );

    TITLE.split('').forEach((letter) => {
      expect(container).toContainHTML(`<span>${letter}</span>`);
    });

    expect(getByText('2021-07-20'));
    expect(container).toContainHTML('<img');
    expect(getByText('NextJs Info'));
  });
});
