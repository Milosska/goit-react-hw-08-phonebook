import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { StyledButton, ModalContainer, ModalFooter } from './SureModal.styled';

export const SureModal = ({ contactId }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = evtId => {
    dispatch(deleteContact(evtId));
  };

  return (
    <>
      <StyledButton variant="danger" onClick={handleShow}>
        Delete
      </StyledButton>

      <ModalContainer show={show} onHide={handleClose}>
        <Modal.Header closeButton> </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <ModalFooter>
          <Button
            variant="dark"
            type="button"
            onClick={() => handleDelete(contactId)}
          >
            Yes
          </Button>
          <Button variant="danger" type="button" onClick={handleClose}>
            No
          </Button>
        </ModalFooter>
      </ModalContainer>
    </>
  );
};
