// import { useGetContactsQuery } from 'redux/contactsApi';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { Filter } from 'components/Filter/Filter';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Spinner } from 'components/Spinner/Spinner';
// import { Container, Title, SubTitle } from 'components/App/App.styled';

import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRouter';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));
const RegisterPage = lazy(() => import('../../pages/Register/Register'));
const LoginPage = lazy(() => import('../../pages/Login/Login'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Ewfreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );

  // const { data, isFetching } = useGetContactsQuery();
  // const showContactList = data && !isFetching && data.length > 0;
  // const showText = data && data.length === 0 && !isFetching;
  // return (
  //   <Container>
  //     <Routes>
  //       <Title>Phonebook</Title>
  //       <ContactForm />
  //       <SubTitle>Contacts</SubTitle>
  //       <Filter />
  //       {/* {showContactList ? */}
  //       <ContactList />
  //       <Spinner />
  //       {/* {showText && */}
  //       <p style={{ textAlign: 'center' }}>Don't have contacts...</p>
  //     </Routes>
  //   </Container>
  // );
}
