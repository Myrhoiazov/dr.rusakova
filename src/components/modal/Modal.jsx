import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  const handleChangeModal = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleCloseBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleChangeModal);

    return () => {
      window.removeEventListener('keydown', handleChangeModal);
    };
    // eslint-disable-next-line
  }, []);

  return createPortal(
    <div className={style.overlay} onClick={handleCloseBackdrop}>
      <div className={style.modal}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
