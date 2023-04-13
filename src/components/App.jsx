import 'modern-normalize';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from './GlobalStyles';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsUserLoading,
  selectUserError,
} from 'redux/selectors';
import { Loading } from './Loading/Loading';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';

import GlobalLayout from '../components/GlobalLayout/GlobalLayout';
const Homepage = lazy(() => import('../pages/Homepage/Homepage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isUserLoading = useSelector(selectIsUserLoading);
  const isUserError = useSelector(selectUserError);

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<Homepage />} />
          {isLoggedIn ? (
            <Route path="contacts" element={<ContactsPage />} />
          ) : (
            <>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegistrationPage />} />
            </>
          )}

          <Route path="*" element={<Homepage />} />
        </Route>
      </Routes>
      {isUserLoading && <Loading />}
      {isUserError && <ErrorMessage message={isUserError} />}
    </>
  );
};
