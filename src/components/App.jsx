import 'modern-normalize';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from './GlobalStyles';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalLayout from '../components/GlobalLayout/GlobalLayout';
const Homepage = lazy(() => import('../pages/Homepage/Homepage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<Homepage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="*" element={<Homepage />} />
        </Route>
      </Routes>
    </>
  );
};
