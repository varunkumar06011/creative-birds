import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function Layout({ children, isHome = false }) {
  return (
    <>
      <Nav isHome={isHome} />
      <main style={{ background: 'var(--navy-dark)', minHeight: '100vh' }}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
