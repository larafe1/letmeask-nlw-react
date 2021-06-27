import Modal from 'react-modal';

import './styles.scss';
import { IModal } from '../../types';

const modalStyles = {
  content: {
    inset: '50% 50% 50% 50%',
    borderRadius: '8px',
    transform: 'translate(-50%, -50%)',
    width: '30rem',
    height: '10rem'
  }
}

Modal.setAppElement('body');

function ModalDialog({
  closeModal,
  ...props
}: IModal) {
  return (
    <Modal
      style={modalStyles}
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="confirmation-modal"
    >
      <div className="modal-content">
        {props.children}
      </div>
    </Modal>
  );
}

export { ModalDialog };
