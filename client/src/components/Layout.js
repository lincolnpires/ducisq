import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

function Layout(props) {
  const { children } = props;
  return (
    <div className="wrapper">
      <NavMenu />
      <Container>
        {children}
      </Container>
    </div>
  );
}

export default Layout;
