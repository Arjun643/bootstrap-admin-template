import  { ReactNode } from "react";
import { Modal, ModalProps } from "react-bootstrap";

interface CustomModalProps extends ModalProps {
  className?: string;
  children: ReactNode;
}

export const CustomModal = (props: CustomModalProps) => {
  const { children, className, fullscreen, size, show, onHide, centered } = props;
  return (
    <Modal
      className={className ?? ""}
      dialogClassName={fullscreen ? "modal-fullscreen" : ""}
      size={size ?? "lg"}
      show={show}
      onHide={onHide}
      centered={centered}>
      {children}
    </Modal>
  );
};
export default CustomModal;
