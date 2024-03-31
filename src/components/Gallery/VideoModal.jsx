import Modal from "../shared/Modal";

const VideoModal = ({ isOpen, onClose, source }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className="
      bg-gray-600 
      p-3 
      w-[60vw]
      "
      >
        <iframe
          className="w-full aspect-video"
          src={source}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </Modal>
  );
};

export default VideoModal;
