import styled from '@emotion/styled';

export const Container = styled.div(
  ({ isInputControlFocus }: { isInputControlFocus: boolean }) => ({
    display: 'flex',
    position: 'relative',
    width: '290px',
    borderBottom: '2px solid #d9d9d9',
    padding: '5px 0',
    '&:before': {
      right: '50%',
    },
    '&:after': {
      left: '50%',
    },
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      bottom: '-2px',
      width: isInputControlFocus ? '50%' : '0%',
      height: '2px',
      backgroundColor: '#38d39f',
      transition: '.4s',
    },
    '& > div:nth-of-type(1)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '7%',
    },
    '& > div:nth-of-type(2)': {
      width: '93%',
    },
    '& > div': {
      position: 'relative',
      width: '100%',
      height: '45px',
      '& svg': {
        color: isInputControlFocus ? '#38d39f' : 'inherit',
      },
      '& h5': {
        position: 'absolute',
        top: isInputControlFocus ? '-5px' : '55%',
        left: '10px',
        color: '#999',
        fontSize: isInputControlFocus ? '15px' : '18px',
        fontWeight: 900,
        transform: 'translateY(-50%)',
        transition: '.3s',
      },
      '& input': {
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        background: 'none',
        border: 'none',
        outline: 'none',
        padding: '10px',
        color: '#555',
        fontSize: '20px',
        fontFamily: `'poppins', sans-serif`,
        fontWeight: 900,
      },
    },
  })
);

export default {};
