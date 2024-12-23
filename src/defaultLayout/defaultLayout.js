import React from 'react';
import Header from "../components/header/header.js"
import Footer from "../components/footer/footer.js"

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
