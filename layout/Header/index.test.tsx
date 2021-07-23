import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import given from 'given2';

import Header, { menus } from './Header';

jest.mock('react-redux');
jest.mock('../../services/auth-service');

describe('Header', () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        user: {
          accessToken: given.accessToken,
          email: given.email,
          photoURL: given.photoURL,
        },
      })
    );
  });

  it('renders menu, input', () => {
    const { getByRole, getByPlaceholderText } = render(<Header />);

    menus.forEach(({ title }) => {
      expect(getByRole('link', { name: title })).toBeInTheDocument();
    });
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  context('when logged in', () => {
    beforeEach(() => {
      given('accessToken', () => 'ACCESS_TOKEN');
      given('email', () => 'xxxx@gmail.com');
      given('photoURL', () => '/images/posts/img1.jpg');
    });

    it('renders avatar, email', () => {
      const { getByText } = render(<Header />);

      expect(getByText('xxxx')).toBeInTheDocument();
    });
  });

  context('when logged out', () => {
    beforeEach(() => {
      given('accessToken', () => '');
    });

    it('renders github, google auth login button', () => {
      const { getByTestId } = render(<Header />);

      expect(getByTestId('github-auth-button')).toBeInTheDocument();
      expect(getByTestId('google-auth-button')).toBeInTheDocument();
    });
  });
});
