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
    '& > ul': {
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

export const Login = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  '& > ul': {
    display: 'flex',
    '& li': {
      '& button': {
        all: 'unset',
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

export const User = styled.div({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '& > div': {
    overflow: 'hidden',
    position: 'relative',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
  },
});

export const DropDown = styled.ul(
  ({ isShowDropDown }: { isShowDropDown: boolean }) => ({
    position: 'absolute',
    top: '50px',
    right: '22px',
    display: isShowDropDown ? 'flex' : 'none',
    flexDirection: 'column',
    border: '1px solid #e6ebf5',
    borderRadius: '4px',
    padding: '8px 0',
    background: '#fff',
    boxShadow: '0 2px 12px 0 rgb(0 0 0 / 10%)',
    lineHeight: '28px',
    listStyle: 'none',
    zIndex: 2000,
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: '-7px',
      right: '11px',
      display: 'block',
      borderRight: '6px',
      borderBottom: '6px',
      borderLeft: '6px',
      borderColor: 'transparent',
      borderBottomColor: '#fff',
      borderStyle: 'solid',
    },
    '& li': {
      padding: '0 16px',
      color: '#9a9a9a',
      cursor: 'pointer',
      '&:hover': {
        background: 'crimson',
        borderRadius: '4px',
        color: '#fff',
      },
      '& a': {
        fontSize: '.75rem',
        fontWeight: 400,
      },
    },
  })
);
