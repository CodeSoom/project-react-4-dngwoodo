import styled from '@emotion/styled';

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  '& h3': {
    display: 'block',
    position: 'relative',
    width: '100%',
    fontSize: '24px',
    margin: '24px 0',
    fontWeight: 400,
    textAlign: 'center',
    textTransform: 'lowercase',
    opacity: 0.5,
    '& span': {
      display: 'inline-block',
      position: 'relative',
      zIndex: 1,
      backgroundColor: '#fff',
      padding: '0 16px',
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      zIndex: 0,
      width: '80%',
      height: '1px',
      borderTop: '1px solid #0c1721',
      transform: 'translateX(-50%)',
    },
  },
  '& ul': {
    display: 'flex',
    justifyContent: 'center',
    '& li:nth-of-type(1)': {
      marginRight: '16px',
    },
    '& button': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '48px',
      height: '48px',
      background: 'none',
      border: '1px solid rgb(222, 226, 230)',
      borderRadius: '50%',
      outline: 'none',
      fontSize: '32px',
      cursor: 'pointer',
    },
  },
});

export default {};
