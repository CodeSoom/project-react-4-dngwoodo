import { render } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('renders component name', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Blog')).toBeInTheDocument();
  });
});
