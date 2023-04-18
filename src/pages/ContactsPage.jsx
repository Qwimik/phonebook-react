import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Flex } from '@chakra-ui/react';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Flex align="center" justify="center" direction="column">
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </Flex>
  );
}
