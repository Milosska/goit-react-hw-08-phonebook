import Container from 'react-bootstrap/Container';
import { Layout, BigColumn, SmallColumn } from './AuthLayout.styled';

export const AuthLayout = ({ children, layout = 'login' }) => {
  return (
    <Container fluid>
      <Layout layout={layout}>
        <BigColumn xs={8} layout={layout}></BigColumn>
        <SmallColumn>{children}</SmallColumn>
      </Layout>
    </Container>
  );
};
