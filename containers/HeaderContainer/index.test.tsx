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
    });
  });
});
