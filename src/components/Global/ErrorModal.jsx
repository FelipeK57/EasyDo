import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

function ErrorModal({ title, message, buttonText, isOpen, onClose }) {
  return (
    <Modal className="mx-4" size="sm" placement="center" isOpen={isOpen}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h1 className="text-2xl">{title}</h1>
        </ModalHeader>
        <ModalBody>
          <p className="text-medium">{message}</p>
        </ModalBody>
        <ModalFooter className="flex items-center flex-col">
          <Button variant="shadow" className="font-semibold" color="primary" onPress={onClose}>
            {buttonText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ErrorModal;
