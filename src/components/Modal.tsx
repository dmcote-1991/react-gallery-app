// Modal.tsx
import React from 'react';

interface ModalProps {
  imageSrc: string; // Source URL of the image to display
  onClose: () => void; // Function to close the modal
}

const Modal: React.FC<ModalProps> = ({ imageSrc, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose} role="presentation" aria-label="Close image modal">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Enlarged view" />
        <button className="close-btn" onClick={onClose} aria-label="Close">Close</button>
      </div>
    </div>
  );
};

export default Modal;
