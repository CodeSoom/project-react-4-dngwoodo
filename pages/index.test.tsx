import { render } from '@testing-library/react';

import Home from '.';

describe('Home', () => {
  it('renders post titles', () => {
    const { getByText } = render(
      <Home
        posts={[
          {
            slug: 'writing-great-unit-tests',
            frontmatter: {
              title: 'Writing Great Unit Tests',
              date: 'March 12, 2021',
              excerpt:
                'We will look at 10 simple tips and tricks on writing unit tests in JavaScript',
              coverImage: '/images/posts/img7.jpg',
            },
          },
        ]}
      />
    );

    expect(getByText('Writing Great Unit Tests')).toBeInTheDocument();
  });
});
