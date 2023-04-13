import { ContactListItems } from 'components/ContactListItems/ContactListItems';

import { ContactUl } from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  return (
    <ContactUl>
      <ContactListItems />
    </ContactUl>
  );
};
