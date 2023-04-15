import { useSelector } from 'react-redux';
import { Container } from './AddContactMenu.styled';
import { selectContacts } from 'redux/selectors';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';

export const AddContactMenu = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Container>
      <p>Total contacts: {contacts.length}</p>
      <AddContactForm type="user" />
    </Container>
  );
};
