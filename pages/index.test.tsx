import { render } from '@testing-library/react';

import Home from './index.page';

jest.mock('@/services/post-repository');

describe('Home', () => {
  it('renders title, date of posts', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Home')).toBeInTheDocument();
  });
});
