import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const StyledButton = styled(Button)`
  padding: 5px 10px;
  font-weight: 500;
  font-size: 16px;
`;

export const FormContainer = styled(Form)`
  width: 100%;
  font-size: 18px;
`;

export const Label = styled(Form.Label)`
  display: block;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Input = styled(Form.Control)`
  margin-top: 5px;

  :focus,
  :active {
    outline: 4px solid #c0bdbd;
  }
`;

export const SubmitButton = styled(Button)`
  margin-left: 75%;
`;
