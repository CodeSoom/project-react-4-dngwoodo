import { fireEvent, render } from '@testing-library/react';

import Header, { menus } from './Header';

jest.mock('next/link', () => {
  return ({ children }: { children: string }) => {
    return children;
  };
});

describe('Header', () => {
  it('renders menu, input', () => {
    const { getByRole, getByPlaceholderText } = render(<Header />);

    menus.forEach(({ title }) => {
      expect(getByRole('link', { name: title })).toBeInTheDocument();
    });
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  context('when logged in', () => {
    it('renders avatar, user id', () => {
      const { getByRole, container, getByText } = render(<Header />);

      fireEvent.click(getByRole('link', { name: 'Login' }));

      expect(container).toContainHTML('<img');
      expect(getByText('Admin')).toBeInTheDocument();
    });
  });

  context('when logged out', () => {
    it('renders Login menu', () => {
      const { getByRole } = render(<Header />);

      expect(getByRole('link', { name: 'Login' })).toBeInTheDocument();
    });
  });
});
