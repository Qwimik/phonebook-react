import { FaWindowClose } from 'react-icons/fa';
import { Spinner } from 'components/Spinner/Spinner';

import {
  ContactLi,
  ContactBtn,
  ContactInfo,
} from 'components/ContactList/ContactList.styled';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactListItem = ({ id, name, number }) => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  return (
    <ContactLi>
      <ContactInfo>
        <span>{name}</span>
        <span>{number}</span>
      </ContactInfo>
      <ContactBtn
        type="button"
        disabled={isRefreshing}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        {isRefreshing ? <Spinner /> : <FaWindowClose />}
      </ContactBtn>
    </ContactLi>
  );
};
