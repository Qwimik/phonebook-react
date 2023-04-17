// import { useGetContactsQuery } from 'redux/contactsApi';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Spinner } from 'components/Spinner/Spinner';
import { Container, Title, SubTitle } from 'components/App/App.styled';

export default function Contacts() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
      <Spinner />
      <p style={{ textAlign: 'center' }}>Don't have contacts...</p>
    </Container>
  );
}
