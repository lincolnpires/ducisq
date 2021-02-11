/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

function Layout(props) {
  const { children } = props;
  return (
    <div>
      <NavMenu />
      <Container>
        {children}
      </Container>
    </div>
  );
}

export default Layout;
