import { render } from '@testing-library/react';

import Comment from './Comment';

describe('Comment', () => {
  it('renders title, number, image, username, time, comment, reply, like', () => {
    const { getByText, container } = render(<Comment />);

    expect(getByText('Comments')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
    expect(container).toContainHTML('<img');
    expect(getByText('dngwoodo')).toBeInTheDocument();
    expect(getByText('5 min ago')).toBeInTheDocument();
    expect(
      getByText(
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos corrupti obcaecati numquam nostrum nisi possimus beatae eaque veniam explicabo ea consequuntur, recusandae labore illo, eos quidem reiciendis aperiam! Reprehenderit, sunt!'
      )
    ).toBeInTheDocument();
    expect(getByText('Reply')).toBeInTheDocument();
    expect(getByText('Like?')).toBeInTheDocument();
    expect(getByText('24')).toBeInTheDocument();
  });
});
