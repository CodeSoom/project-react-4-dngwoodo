import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ImageContainer = styled(motion.div)({
  position: 'relative',
  marginBottom: '50px',
  width: '100%',
  height: '475px',
});

export const TopContainer = styled.div({
  display: 'flex',
  margin: '0 auto',
  marginBottom: '40px',
  padding: '0 16px',
  maxWidth: '768px',
});

export const Top = styled.div({
  margin: '0 auto',
  fontFamily: `"HelveticaNeue-CondensedBold", -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
  sans-serif`,
  fontWeight: 900,
});

export const MetaDataContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '30px',
  '& a': {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      fontSize: '1.125rem',
    },
  },
});

export const MetaData = styled.div({
  display: 'flex',
  alignItems: 'center',
  '& p': {
    marginRight: '15px',
  },
  '& div': {
    display: 'flex',
    alignItems: 'center',
    '& p': {
      marginLeft: '3px',
      marginRight: '0',
    },
  },
});

export const Title = styled.h1({
  marginBottom: '25px',
  marginLeft: '-5px',
  fontSize: '5rem',
  wordBreak: 'break-all',
});

export const Tags = styled.ul({
  display: 'flex',
  marginLeft: '-10px',
  '& li': {
    padding: '0 10px',
  },
});

export const Content = styled.p({
  margin: '0 auto',
  maxWidth: '768px',
  padding: '0 16px',
  fontFamily: 'Helvetica Neue',
  fontWeight: 400,
  lineHeight: '28px',
});
