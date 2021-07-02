import { render } from '@testing-library/react';

import Blog from './Blog';

describe('Blog', () => {
  it('renders component name', () => {
    const { getByText } = render(<Blog />);

    expect(getByText('Blog')).toBeInTheDocument();
  });
});
