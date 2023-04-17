import { FaWindowClose } from 'react-icons/fa';

import {
  ContactLi,
  ContactBtn,
  ContactInfo,
} from 'components/ContactList/ContactList.styled';

import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { useGetContactsQuery, useDeleteContactMutation } from 'redux/contacts';

//toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { warningMsg } from 'utilities/toast';

export const ContactListItems = () => {
  const filter = useSelector(getFilter);
  const { data, isFetching } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      {!isFetching &&
        data
          .filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(item => {
            return (
              <ContactLi key={item.name}>
                <ContactInfo>
                  <span>{item.name}</span>
                  <span>{item.phone}</span>
                </ContactInfo>
                <ContactBtn
                  type="button"
                  onClick={() => {
                    deleteContact(item.id);
                    warningMsg(item.name);
                  }}
                >
                  <FaWindowClose />
                </ContactBtn>
              </ContactLi>
            );
          })}
      <ToastContainer />
    </>
  );
};
