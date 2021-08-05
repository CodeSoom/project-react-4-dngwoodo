import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import given from 'given2';
import HeaderContainer from './HeaderContainer';

jest.mock('react-redux');
jest.mock('@/services/auth-service');

describe('HeaderContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        user: given.user,
      })
    );
  });

  context('when logged in', () => {
    beforeEach(() => {
      given('user', () => ({
        uid: 'xxxx',
        email: 'xxxx@gmail.com',
        photoURL: '/images/photos/xxxx.png',
      }));
    });

    it("listens 'Log Out' click event", () => {
      const { getByText } = render(<HeaderContainer />);

      fireEvent.click(getByText('Log Out'));

      expect(dispatch).toBeCalledWith({
        type: 'user/logout',
      });
    });

    it("listens 'avatar' click event", () => {
      const { getByTestId } = render(<HeaderContainer />);

      expect(getByTestId('dropdown-menu')).toHaveStyle('display: none');

      fireEvent.click(getByTestId('user-menu'));

      expect(getByTestId('dropdown-menu')).toHaveStyle('display: flex');
    });

    it("listens 'document' click event", () => {
      const { getByTestId } = render(<HeaderContainer />);

      expect(getByTestId('dropdown-menu')).toHaveStyle('display: none');

      fireEvent.click(getByTestId('user-menu'));

      expect(getByTestId('dropdown-menu')).toHaveStyle('display: flex');

      fireEvent.click(document);

      expect(getByTestId('dropdown-menu')).toHaveStyle('display: none');
    });
  });

  context('when logged out', () => {
    beforeEach(() => {
      given('user', () => ({
        uid: '',
        email: '',
        photoURL: '',
      }));

      const modal = document.createElement('div');
      modal.setAttribute('id', 'modal');
      document.body.appendChild(modal);
    });

    it("listens 'Login' click event", () => {
      const { getByRole } = render(<HeaderContainer />);

      fireEvent.click(getByRole('button', { name: 'Login' }));

      expect(getByRole('heading', { name: 'Welcome' })).toBeInTheDocument();
    });

    it("listens 'modal-close-button' click event", () => {
      const { getByTestId, queryByRole } = render(<HeaderContainer />);

      fireEvent.click(queryByRole('button', { name: 'Login' })!);

      expect(queryByRole('heading', { name: 'Welcome' })).toBeInTheDocument();

      fireEvent.click(getByTestId('modal-close-button'));

      expect(
        queryByRole('heading', { name: 'Welcome' })
      ).not.toBeInTheDocument();
    });
  });
});
