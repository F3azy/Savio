import Modal from "../shared/Modal";

const ImageModal = ({ isOpen, onClose, source }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className="
            bg-gray-600 
            rounded-[20px] 
            p-3 
            "
      >
        <img className="rounded-lg" src={source} alt="Selected Image" />
      </div>
    </Modal>
  );
};

export default ImageModal;
