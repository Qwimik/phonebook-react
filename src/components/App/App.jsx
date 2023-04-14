import { useSelector, useDispatch } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container, Title, SubTitle } from 'components/App/App.styled';

import * as contactsOperations from 'redux/contactsOperations';
import { getContacts, filterContact } from 'redux/reducer';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      {allContacts.length > 0 ? (
        <ContactList />
      ) : (
        <p style={{ textAlign: 'center' }}>Don't have contacts...</p>
      )}
    </Container>
  );
}
