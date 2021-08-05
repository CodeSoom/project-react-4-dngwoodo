import styled from '@emotion/styled';

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '360px',
  '& h2': {
    margin: '30px 0',
    color: '#333',
    fontSize: '40px',
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: 900,
    textTransform: 'uppercase',
  },
  '& > div:nth-of-type(2)': {
    marginBottom: '24px',
  },
});

export const ImageContainer = styled.div({
  position: 'relative',
  width: '100px',
  height: '100px',
});

export const Button = styled.button({
  width: '80%',
  height: '50px',
  backgroundImage: 'linear-gradient(to right, #32be8f, #38d39f, #32be8f)',
  backgroundSize: '200%',
  margin: '16px 0',
  border: 'none',
  borderRadius: '25px',
  outline: 'none',
  color: '#fff',
  fontSize: '18px',
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: 900,
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: '.5s',
  '&:hover': {
    backgroundPosition: 'right',
  },
});

export const Links = styled.ul({
  display: 'flex',
  '& li': {
    position: 'relative',
    padding: '0 18px',
    '& ~ li:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '1px',
      height: '100%',
      background: '#1264a3',
      transform: 'rotate(25deg)',
    },
    '& button': {
      all: 'unset',
      color: '#1264a3',
      fontFamily: '',
      fontWeight: 400,
      cursor: 'pointer',
    },
  },
});
