import { useState } from "react";

export default function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen(prev => prev = true);
    }

    const onClose = () => {
        setIsOpen(prev => prev = false);
    }
  
    return {isOpen, onOpen, onClose};
}
