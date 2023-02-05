import { ModalWindow, Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.getElementById('modal');

export const Modal = ({ closeModal, tags, modalImg }) => {
  const closeKeyModal = element => {
    if (element.code === 'Escape') {
      closeModal();
    }
  };
  const handelClick = event => {
    if (event.currentTarget === event.target) closeModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', closeKeyModal);

    return () => {
      window.removeEventListener('keydown', closeKeyModal);
    };
  });

  return createPortal(
    <Overlay onClick={handelClick}>
      <ModalWindow>
        <img src={modalImg} alt={tags} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
