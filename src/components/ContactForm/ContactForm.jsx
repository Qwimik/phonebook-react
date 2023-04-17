import { useState } from 'react';

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

import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsApi';
import { Spinner } from 'components/Spinner/Spinner';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { data } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const onSubmit = e => {
    e.preventDefault();
    const names = data?.map(item => item.name);
    if (names.some(item => item.toLowerCase() === name.toLowerCase())) {
      errorMsg(name);
      return;
    }
    const newContact = { name, phone };
    addContact(newContact);
    succsessMsg(name);
    setName('');
    setPhone('');
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
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </FormLabel>
        <div>
          <BtnSubmit type="submit" disabled={isLoading}>
            {isLoading ? <Spinner /> : 'Submit'}
          </BtnSubmit>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};
