import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getAllContacts } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import { Input } from 'components/ContactForm/FormInputName.styled';
import {
  FormLabel,
  LabelSpan,
  BtnSubmit,
} from 'components/ContactForm/ContactForm.styled';

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const errorMsg = name =>
  toast.error(`${name} is already in contacts!`, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
const succsessMsg = name =>
  toast.success(`${name} add to your contacts!`, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const allContacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const names = allContacts.contacts.map(item => item.name);
    if (names.some(item => item.toLowerCase() === name.toLowerCase())) {
      errorMsg(name);
      return;
    }
    const id = nanoid();
    dispatch(addContact({ name, number, id }));
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
          <BtnSubmit type="submit">Submit</BtnSubmit>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};
