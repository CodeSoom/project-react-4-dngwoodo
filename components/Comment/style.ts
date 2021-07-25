import styled from '@emotion/styled';

export const Container = styled.div({
  margin: '0 auto',
  padding: '40px 16px',
  maxWidth: '768px',
  fontFamily: 'Helvetica Neue',
});

export const Title = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '48px',
  fontFamily: `"HelveticaNeue-CondensedBold", -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
  sans-serif`,
  fontWeight: 900,
  '& h2': {
    marginRight: '12px',
    fontSize: '1.5rem',
  },
  '& span': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    width: '28px',
    height: '28px',
    textAlign: 'center',
    backgroundColor: 'yellow',
    boxShadow: '0px 12px 12px #FFFCCE',
  },
});

export const Comments = styled.ul({
  '& li': {
    display: 'flex',
    marginBottom: '40px',
  },
});

export const UserImage = styled.div({
  flexShrink: 0,
  marginRight: '16px',
  position: 'relative',
  width: '64px',
  height: '64px',
  '& div': {
    borderRadius: '50%',
  },
});

export const CommentTop = styled.div({
  marginBottom: '12px',
  '& span': {
    fontFamily: `"HelveticaNeue-CondensedBold", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif`,
    '&:nth-of-type(2)': {
      color: '#A2A2A2',
      fontFamily: 'Helvetica Neue',
      fontWeight: 300,
    },
  },
});

export const CommentMiddle = styled.p({
  marginBottom: '12px',
  lineHeight: '28px',
});

export const CommentBottom = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '12px',
  '& > div:nth-of-type(1)': {
    '& span': {
      marginRight: '16px',
      color: '#A2A2A2',
      fontWeight: 300,
      cursor: 'pointer',
    },
  },
  '& > div:nth-of-type(2)': {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 300,
    '& svg': {
      marginRight: '8px',
      cursor: 'pointer',
    },
  },
});

export const CommentInput = styled.div(
  ({ isShowReply = true }: { isShowReply?: boolean }) => ({
    display: isShowReply ? 'flex' : 'none',
    flexDirection: 'column',
    '& textarea': {
      marginBottom: '16px',
      outline: 'none',
      border: '1px solid rgb(233, 236, 239)',
      borderRadius: '4px',
      padding: '16px 16px 24px 16px',
      resize: 'none',
    },
    '& button': {
      alignSelf: 'flex-end',
      padding: '8px 16px',
      outline: 'none',
      border: 'none',
      borderRadius: '4px',
      color: '#fff',
      fontWeight: 900,
      cursor: 'pointer',
      backgroundColor: 'rgb(18, 184, 134)',
      '&:focus, &:hover': {
        backgroundColor: 'rgb(32, 201, 151)',
      },
    },
  })
);
