import { NavLink } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

export const Navigation = () => {
  return (
    // <Navbar bg="light" expand="lg">
    //   <Container>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
      </ul>
    </nav>
    //   </Container>
    // </Navbar>
  );
};
