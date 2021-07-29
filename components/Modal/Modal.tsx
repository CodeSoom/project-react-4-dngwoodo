import { IoClose } from 'react-icons/io5';
import { ReactChild } from 'react';

import { ModalOverlay, ModalWrapper, ModalClose } from './style';

type Props = {
  onClickHideModal: () => void;
  children: ReactChild;
};

export default function Modal({ onClickHideModal, children }: Props) {
  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalClose type='button' onClick={onClickHideModal}>
          <IoClose />
        </ModalClose>
        {children}
      </ModalWrapper>
    </ModalOverlay>
  );
}
