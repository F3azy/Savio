import React from "react";
import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div
        className="  
        fixed 
      top-0 bottom-0 right-0 left-0
      z-[1000]
      bg-black
      bg-opacity-60
      "
        onClick={onClose}
      />
      <IoMdClose
        className="
      fixed 
      top-20 
      right-5
      z-[1000]
      text-violet-50
      hover:text-violet-300
      cursor-pointer
      "
        size={70}
        onClick={onClose}
      />
      <div
        className="
      fixed 
      top-[50%] left-[50%] 
      z-[1000]
     -translate-x-1/2
     -translate-y-1/2
      flex
      justify-center
    content-center
    "
      >
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
