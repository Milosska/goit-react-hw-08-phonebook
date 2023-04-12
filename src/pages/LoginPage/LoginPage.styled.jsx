import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as image from '../../images/backgrounds/login.jpg';
import * as bigImage from '../../images/backgrounds/login_2x.jpg';

export const Layout = styled(Row)`
  min-height: 90vh;
`;

export const BigColumn = styled(Col)`
  background-image: url(${image.default});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bigImage.default});
  }
`;

export const SmallColumn = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 4px solid black;
`;

export const FormContainer = styled(Form)`
  width: 100%;
  padding: 0 20px;
  font-size: 18px;
  /* outline: 2px solid red; */
`;

export const Label = styled(Form.Label)`
  display: block;
`;

export const Input = styled(Form.Control)`
  :focus,
  :active {
    outline: 4px solid #c0bdbd;
  }
`;

export const StyledBtn = styled(Button)`
  position: relative;
  left: 50%;
  margin-top: 20px;
  padding: 5px 30px;
  font-size: 18px;
  transform: translate(-50%);
`;
