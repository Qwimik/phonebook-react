import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import {
  Input,
  FormControl,
  Button,
  Spinner,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { useAuth } from 'hooks';
import { AddIcon } from '@chakra-ui/icons';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const { isLoading } = useAuth();
  const toast = useToast();

  const onSubmit = e => {
    e.preventDefault();
    const names = contacts?.map(item => item.name);
    if (names.some(item => item.toLowerCase() === name.toLowerCase())) {
      toast({
        title: `${name} is already in contacts!`,
        position: 'top',
        status: 'error',
        isClosable: true,
      });
      return;
    }
    const newContact = { name, number };
    dispatch(addContact(newContact));
    toast({
      title: `${name} add to your contacts.`,
      position: 'top',
      status: 'success',
      isClosable: true,
    });
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={onSubmit} autoComplete="off">
        <FormControl>
          <Stack spacing="12px">
            <label>
              <Input
                variant="filled"
                placeholder="Name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
            <label>
              <Input
                variant="filled"
                placeholder="Number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={e => setNumber(e.target.value)}
              />
            </label>
            <Button
              type="submit"
              size="md"
              _hover={{ bg: '#5cb85c', color: 'white' }}
            >
              {isLoading ? <Spinner /> : <AddIcon />}
            </Button>
          </Stack>
        </FormControl>
      </form>
    </>
  );
};
