import { useState } from 'react';
import Modal from 'react-modal';

const modalDialogStyles = {
  content: {
    inset: '50% 50% 50% 50%',
    borderRadius: '8px',
    transform: 'translate(-50%, -50%)'
  }
}

Modal.setAppElement('body');

function ModalDialog() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  function openModalDialog() {
    setIsModalOpened(true);
  }

  function closeModalDialog() {
    setIsModalOpened(false);
  }

  return (
    <div>
      <Modal
        style={modalDialogStyles}
        isOpen={isModalOpened}
        onRequestClose={closeModalDialog}
        contentLabel="Example modal"
      >
        <span>Hello world</span>
      </Modal>
    </div>
  );
}

export { ModalDialog };
