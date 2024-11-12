// Photo.tsx
import { useState } from 'react';
import Modal from './Modal'; // Import the modal component

interface PhotoProps {
  src: string; // URL source of the image
  alt: string; // Alt text for accessibility
}

const Photo: React.FC<PhotoProps> = ({ src, alt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <li onClick={openModal}>
        <img src={src} alt={alt} />
      </li>
      
      {/* Render the modal if it's open */}
      {isModalOpen && <Modal imageSrc={src} onClose={closeModal} />}
    </>
  );
};

export default Photo;
