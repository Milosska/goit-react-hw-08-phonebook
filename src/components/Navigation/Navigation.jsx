import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import {
  AppBar,
  LogoIcon,
  LogoText,
  NavContainer,
  StyledLink,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <AppBar bg="dark" expand="lg">
      <NavContainer className="justify-content-center">
        <LinkContainer to="/">
          <LogoText>
            <LogoIcon />
            PhoneBook
          </LogoText>
        </LinkContainer>
        <StyledLink to="/">
          <Nav.Link>Home</Nav.Link>
        </StyledLink>
        <StyledLink to="/contacts">
          <Nav.Link>Contacts</Nav.Link>
        </StyledLink>
        <StyledLink to="/login">
          <Nav.Link>Log In</Nav.Link>
        </StyledLink>
        <StyledLink to="/register">
          <Nav.Link>Sign Up</Nav.Link>
        </StyledLink>
      </NavContainer>
    </AppBar>
  );
};
