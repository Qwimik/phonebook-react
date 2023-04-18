import { ContactListItem } from 'components/ContactListItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  return (
    <>
      {contacts.length === 0 && (
        <p style={{ textAlign: 'center' }}>Don't have contacts...</p>
      )}
      <Box maxW="500px">
        <ul>
          {contacts
            ?.filter(item =>
              item.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ id, name, number }) => {
              return (
                <ContactListItem key={id} id={id} name={name} number={number} />
              );
            })}
        </ul>
      </Box>
      <ToastContainer />
    </>
  );
};
