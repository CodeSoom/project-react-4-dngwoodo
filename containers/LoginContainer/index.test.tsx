import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import LoginContainer from './LoginContainer';

jest.mock('react-redux');

describe('LoginContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
  });

  it('renders title, buttons', () => {
    const { getByRole } = render(<LoginContainer />);

    expect(getByRole('heading', { name: 'Login' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Google' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Github' })).toBeInTheDocument();
  });

  it('listens click event', () => {
    const { getByRole } = render(<LoginContainer />);

    fireEvent.click(getByRole('button', { name: 'Google' }));

    expect(dispatch).toBeCalled();
  });
});
