import React from 'react';
import LoginHeader from '../components/layoutLogin/HeaderLogin/HeaderLogin.js';

const LoginLayout = ({ children }) => {
  return (
    <>
      <LoginHeader />
      <main>{children}</main>
    </>
  );
};

export default LoginLayout;
