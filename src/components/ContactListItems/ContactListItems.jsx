import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getAllContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { FaWindowClose } from 'react-icons/fa';
import {
  ContactLi,
  ContactBtn,
} from 'components/ContactList/ContactList.styled';

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
  const allContacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      {allContacts.contacts
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(item => {
          return (
            <ContactLi key={item.name}>
              <span>
                {item.name}: {item.number}
              </span>
              <ContactBtn
                type="button"
                onClick={() => {
                  dispatch(deleteContact(item.name));
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
