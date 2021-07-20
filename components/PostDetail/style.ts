import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div({
  maxWidth: '1200px',
  margin: '0 auto',
});

export const ImageContainer = styled(motion.div)({
  width: '100%',
  height: '300px',
  position: 'relative',
});

export const TopContainer = styled.div({
  display: 'flex',
  marginBottom: '40px',
});

export const Top = styled.div({
  margin: '0 auto',
});

export const MetaDataContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

export const MetaData = styled.div({
  display: 'flex',
  '& p': {
    marginRight: '10px',
  },
});

export const Title = styled.h1({
  fontSize: '5rem',
  wordBreak: 'break-all',
});

export const Tags = styled.ul({
  '& li': {
    padding: '0 10px',
  },
  paddingLeft: '-10px',
});
