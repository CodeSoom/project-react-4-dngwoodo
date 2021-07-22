import { render } from '@testing-library/react';

import LoginContainer from './LoginContainer';

describe('LoginContainer', () => {
  it('renders title, buttons', () => {
    const { getByRole } = render(<LoginContainer />);

    expect(getByRole('heading', { name: 'Login' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Google' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Github' })).toBeInTheDocument();
  });
});
