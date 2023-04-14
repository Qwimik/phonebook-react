import { FaWindowClose } from 'react-icons/fa';
import {
  ContactLi,
  ContactBtn,
  ContactInfo,
} from 'components/ContactList/ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from 'redux/contactsOperations';
import { getContacts, getFilter } from 'redux/reducer';

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const warningMsg = name =>
  toast.warn(`${name} contact has been removed!`, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });

export const ContactListItems = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <>
      {allContacts
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
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
                  dispatch(contactsOperations.deleteContact(item.id));
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
