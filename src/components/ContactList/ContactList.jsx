import { ContactListItem } from 'components/ContactListItems/ContactListItem';

import { ContactUl } from 'components/ContactList/ContactList.styled';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectLoading,
  selectFilter,
} from 'redux/contacts/selectors';
import { Spinner } from 'components/Spinner/Spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactList = () => {
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  return (
    <>
      {contacts.length === 0 && (
        <p style={{ textAlign: 'center' }}>Don't have contacts...</p>
      )}
      <ContactUl>
        {contacts
          ?.filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ id, name, number }) => {
            return (
              <ContactListItem key={id} id={id} name={name} number={number} />
            );
          })}
      </ContactUl>
      {isLoading && <Spinner />}
      <ToastContainer />
    </>
  );
};
