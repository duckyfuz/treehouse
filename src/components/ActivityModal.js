import React from 'react';

const Modal = ({ isOpen, onClose, param1, param2 }) => {
  if (!isOpen) {
    return null;
  }

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modal Content</h2>
        <p>Parameter 1: {param1}</p>
        <p>Parameter 2: {param2}</p>
        <button onClick={handleCloseModal}>Close Modal</button>
      </div>
    </div>
  );
};

export default Modal;