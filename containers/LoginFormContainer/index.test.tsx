import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import ModalContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('ModalContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);

    (useSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        modal: {
          isShowModal: true,
        },
      })
    );
  });

  it('listens click event', () => {
    const { getByRole } = render(<ModalContainer />);

    fireEvent.click(getByRole('button', { name: 'x' }));

    expect(dispatch).toHaveBeenCalledWith({
      type: 'modal/hideModal',
      payload: undefined,
    });
  });
});
