import { ReactChild, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactChild;
};

const Portal = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(children, document.getElementById('modal')!);
};

export default Portal;
