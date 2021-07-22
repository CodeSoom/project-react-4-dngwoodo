import styled from '@emotion/styled';

export const Container = styled.header({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 12px',
  width: '100%',
  height: '114px',
  fontFamily: 'HelveticaNeue',
  fontSize: '1.25rem',
  background: '#fff',
  boxShadow: '0 1px 4px rgb(0 21 41 / 8%);',
  zIndex: 10000,
  '& > div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1300px',
    '& ul': {
      display: 'flex',
      '& li': {
        borderRadius: '4px',
        padding: '12px 16px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'crimson',
          color: '#fff',
        },
      },
    },
  },
});

export const LeftMenu = styled.div({
  display: 'flex',
  alignItems: 'center',
  fontSize: '3rem',
  '& svg': {
    color: 'crimson',
  },
});

export const RightMenu = styled.div({
  display: 'flex',
});

export const Search = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginRight: '16px',
  '& label': {
    cursor: 'pointer',
  },
  '& input[type=checkbox]': {
    display: 'none',
    '&:checked + input': {
      width: '210px',
    },
  },
  '& input[type=text]': {
    marginLeft: '8px',
    border: 0,
    borderRadius: 0,
    borderBottom: '1px solid #d9d9d9',
    padding: 0,
    width: 0,
    height: '40px',
    outline: 'none',
    color: '#606266',
    fontWeight: 100,
    transition: 'width .2s cubic-bezier(.645,.045,.355,1)',
    '&::placeholder': {
      color: 'rgb(0, 0, 0, 0.4)',
      fontFamily: 'HelveticaNeue',
      fontWeight: 100,
    },
  },
});

export const User = styled.div({
  display: 'flex',
  alignItems: 'center',
  '& div:nth-of-type(1)': {
    overflow: 'hidden',
    position: 'relative',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '12px',
    cursor: 'pointer',
  },
  '& div:nth-of-type(2)': {
    lineHeight: '40px',
  },
  '& > a': {
    display: 'block',
    borderRadius: '4px',
    padding: '12px 16px',
    '&:hover': {
      backgroundColor: 'crimson',
      color: '#fff',
    },
  },
});
