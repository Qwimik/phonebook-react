import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/contactsApi';

//toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactListItem } from './ContactListItem';

export const ContactListItems = () => {
  const filter = useSelector(getFilter);
  const { data, isFetching } = useGetContactsQuery();

  return (
    <>
      {!isFetching &&
        data
          .filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(item => {
            return <ContactListItem key={item.id} item={item} />;
          })}
      <ToastContainer />
    </>
  );
};
