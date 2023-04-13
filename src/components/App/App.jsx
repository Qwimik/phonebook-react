import { useSelector } from 'react-redux';
import { getAllContacts } from 'redux/contactsSlice';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container, Title, SubTitle } from 'components/App/App.styled';

export default function App() {
  const allContacts = useSelector(getAllContacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      {allContacts.contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p style={{ textAlign: 'center' }}>Don't have contacts...</p>
      )}
    </Container>
  );
}
