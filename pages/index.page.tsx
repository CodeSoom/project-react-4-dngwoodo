import styled from '@emotion/styled';
import Head from 'next/head';

const Container = styled.div({
  maxWidth: '1300px',
  margin: '0 auto',
  padding: '20px',
  paddingTop: '150px',
});

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Dev Blog</title>
      </Head>
      <div>Home</div>
    </Container>
  );
}
