import { FaWindowClose } from 'react-icons/fa';
import { warningMsg } from 'utilities/toast';
import { Spinner } from 'components/Spinner/Spinner';
import { useDeleteContactMutation } from 'redux/contactsApi';

import {
  ContactLi,
  ContactBtn,
  ContactInfo,
} from 'components/ContactList/ContactList.styled';

export const ContactListItem = ({ item }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ContactLi>
      <ContactInfo>
        <span>{item.name}</span>
        <span>{item.phone}</span>
      </ContactInfo>
      <ContactBtn
        type="button"
        disabled={isLoading}
        onClick={() => {
          deleteContact(item.id);
          warningMsg(item.name);
        }}
      >
        {isLoading ? <Spinner /> : <FaWindowClose />}
      </ContactBtn>
    </ContactLi>
  );
};
