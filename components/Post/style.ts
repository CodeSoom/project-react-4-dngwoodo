import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import mediaquery from '@/utils/mediaquery';

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const Container = styled.li(
  mediaquery({
    width: ['100%', 'calc(50% - 10px)'],
    '&:nth-of-type(odd)': {
      marginRight: ['0', '20px'],
    },
  })
);

export const Card = styled.a({
  display: 'flex',
  flexDirection: 'column',
  margin: '30px 0 60px 0',
  border: 0,
  borderRadius: '6px',
  background: '#fff',
  color: 'rgba(0,0,0,.87)',
  textDecoration: 'none',
  boxShadow:
    '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
});

export const CardTop = styled.div({
  position: 'relative',

  margin: '-30px 15px 0 15px',
  paddingBottom: '60%',
  borderRadius: '6px',
  zIndex: 1,
  '& div': {
    overflow: 'hidden',
    borderRadius: '6px',
    boxShadow:
      '0 5px 15px -8px rgb(0 0 0 / 24%), 0 8px 10px -5px rgb(0 0 0 / 20%)',
    '& img': {
      transition: 'transform .3s',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
  },
});

export const ColoredShadow = styled.div(
  ({ backgroundImage }: { backgroundImage: string }) => ({
    position: 'absolute',
    top: '6%',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundImage: `url(${backgroundImage})`,
    filter: 'blur(12px)',
    transform: 'scale(.94)',
    animation: `${fadeIn} .45s`,
    zIndex: -1,
  })
);

export const CardMiddle = styled.div({
  padding: '15px 30px',
  '& h6': {
    margin: '0.625em 0',
    color: '#4caf50',
    fontSize: '.75rem',
    fontWeight: 500,
    lineHeight: '1.5rem',
    textTransform: 'uppercase',
  },
  '& h4': {
    margin: '.625rem 0 .725rem 0',
    fontSize: '1.125rem',
    fontWeight: 700,
    lineHeight: '1.5em',
    wordWrap: 'break-word',
  },
  '& p': {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    marginBottom: '10px',
    color: '#999',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    WebkitLineClamp: 3,
  },
});

export const CardBottom = styled.div({
  display: 'flex',
  padding: '0 30px 15px 30px',
  '& span': {
    color: '#999',
    fontSize: '.875rem',
    fontWeight: 300,
    '&:last-child': {
      marginLeft: 'auto',
    },
  },
});
