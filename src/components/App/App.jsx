import { useGetContactsQuery } from 'redux/contactsApi';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { RotatingLines } from 'react-loader-spinner';

import {
  Container,
  Title,
  SubTitle,
  LoaderContainer,
} from 'components/App/App.styled';

export default function App() {
  const { data, isFetching } = useGetContactsQuery();
  const showContactList = data && !isFetching && data.length > 0;
  const showText = data && data.length === 0 && !isFetching;

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <LoaderContainer>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="2"
          animationDuration="0.75"
          width="40"
          visible={isFetching}
        />
      </LoaderContainer>
      {showContactList && <ContactList />}
      {showText && (
        <p style={{ textAlign: 'center' }}>Don't have contacts...</p>
      )}
    </Container>
  );
}
