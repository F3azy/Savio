import { useState } from "react";
import useDisclosure from "./useDisclosure";

export default function useModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [source, setSource] = useState("");

  function onClick(src) {
    setSource(src);
    onOpen();
  };

  return { isOpen, onClose, source, onClick };
}
