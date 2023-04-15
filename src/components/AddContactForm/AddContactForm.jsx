import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {
  StyledButton,
  FormContainer,
  Label,
  Input,
  SubmitButton,
} from './AddContactForm.styled';

export const AddContactForm = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const FormSchema = object({
    name: string()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
        message:
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
        excludeEmptyString: true,
      })
      .required('Required'),
    number: string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        {
          message:
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
          excludeEmptyString: true,
        }
      )
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: FormSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addContact(values));
      resetForm({
        name: '',
        number: '',
      });
      setShow(false);
    },
  });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <StyledButton variant="light" onClick={handleShow}>
        Add contact
      </StyledButton>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add new contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormContainer onSubmit={formik.handleSubmit}>
            <Label>
              Contact name
              <Input
                name="name"
                type="text"
                placeholder="Samanta Smith"
                onChange={formik.handleChange}
                value={formik.values.name}
                isValid={formik.touched.name}
                isInvalid={formik.errors.name}
                autoFocus
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Label>
            <Label>
              Phone number
              <Input
                name="number"
                type="tel"
                placeholder="111-11-11"
                onChange={formik.handleChange}
                value={formik.values.number}
                isValid={formik.touched.number}
                isInvalid={formik.errors.number}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.number}
              </Form.Control.Feedback>
            </Label>
            <SubmitButton variant="dark" type="submit">
              Add contact
            </SubmitButton>
          </FormContainer>
        </Modal.Body>
      </Modal>
    </>
  );
};
