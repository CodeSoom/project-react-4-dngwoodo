import styled from '@emotion/styled';

export const ModalOverlay = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  zIndex: 100000,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
});

export const ModalWrapper = styled.div({
  position: 'relative',
  backgroundColor: '#ffffff',
  border: '1px solid #bebebe',
  borderRadius: '4px',
  padding: '12px 16px',
});

export const ModalClose = styled.button({
  position: 'absolute',
  right: '8px',
  top: '8px',
  background: 'none',
  border: 'none',
  color: '#bebebe',
  fontSize: '24px',
  cursor: 'pointer',
  transition: '.3s',
  '&:hover': {
    color: '#333',
  },
});
