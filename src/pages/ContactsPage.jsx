import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Flex, Box, Text } from '@chakra-ui/react';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Flex align="center" justify="center" direction="column">
      <Box>
        <Text fontSize="5xl" textAlign="center">
          Phonebook
        </Text>
        <ContactForm />
        <Filter />
        <Text fontSize="2xl" textAlign="center" my="10px">
          Contacts
        </Text>
        <ContactList />
      </Box>
    </Flex>
  );
}
