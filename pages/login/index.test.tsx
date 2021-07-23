import { render } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import Login from './Login';

jest.mock('react-redux');
jest.mock('firebase/app');

describe('Login', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
  });
  it('renders title, buttons', () => {
    const { getByRole } = render(<Login />);

    expect(getByRole('heading', { name: 'Login' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Google' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Github' })).toBeInTheDocument();
  });
});
