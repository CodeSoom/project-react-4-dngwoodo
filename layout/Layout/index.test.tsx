import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import given from 'given2';

import { MENUS } from '@/components/Header/Header';
import Header from './Layout';

jest.mock('react-redux');
jest.mock('../../services/auth-service');

describe('Header', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);

    (useSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        user: {
          email: given.email,
        },
      })
    );
  });

  it('renders menu, input, auth login buttons', () => {
    const { getByRole, getByPlaceholderText, getByTestId } = render(<Header />);

    MENUS.forEach(({ title }) => {
      expect(getByRole('link', { name: title })).toBeInTheDocument();
    });
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
    expect(getByTestId('github-auth-button')).toBeInTheDocument();
    expect(getByTestId('google-auth-button')).toBeInTheDocument();
  });

  // TODO: router 테스트 필요
});
