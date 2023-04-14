import Col from 'react-bootstrap/Col';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import { Layout, BigColumn } from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <Layout>
      <Col>
        <UserMenu />
      </Col>
      <BigColumn xs={9}></BigColumn>
    </Layout>
  );
};

export default ContactsPage;
