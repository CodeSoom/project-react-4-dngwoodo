import { render } from '@testing-library/react';

import Login from './Login';

describe('Login', () => {
  it('renders title, buttons', () => {
    const { getByRole } = render(<Login />);

    expect(getByRole('heading', { name: 'Login' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Google' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Github' })).toBeInTheDocument();
  });
});
