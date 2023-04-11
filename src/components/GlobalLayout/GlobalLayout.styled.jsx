import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

export const MainContainer = styled.div`
  min-height: 90vh;
`;

export const FooterContainer = styled(Navbar)`
  justify-content: center;
  padding: 10px 20px;
`;

export const FooterText = styled.p`
  font-size: 18px;
  color: white;
`;
