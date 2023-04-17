import { useState } from 'react';
import { useAuth } from 'hooks';

import {
  FormLabel,
  LabelSpan,
  BtnSubmit,
  Input,
} from 'components/ContactForm/ContactForm.styled';

//toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { errorMsg, succsessMsg } from 'utilities/toast';

import { Spinner } from 'components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { isRefreshing } = useAuth();

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmit = e => {
    e.preventDefault();
    const names = contacts?.map(item => item.name);
    if (names.some(item => item.toLowerCase() === name.toLowerCase())) {
      errorMsg(name);
      return;
    }
    const newContact = { name, number };
    dispatch(addContact(newContact));
    succsessMsg(name);
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormLabel htmlFor="name">
          <LabelSpan>Name</LabelSpan>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormLabel>
        <FormLabel htmlFor="number">
          <LabelSpan>Number</LabelSpan>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </FormLabel>
        <div>
          <BtnSubmit type="submit">
            {isRefreshing ? <Spinner /> : 'Submit'}
          </BtnSubmit>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};
