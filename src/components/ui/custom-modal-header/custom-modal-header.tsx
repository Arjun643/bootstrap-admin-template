import  { ReactNode } from "react";
import { ModalHeader, ModalHeaderProps } from "react-bootstrap";

interface CustomModalHeaderProps extends ModalHeaderProps {
  className?: string;
  children?: ReactNode;
}

export const CustomModalHeader = (props: CustomModalHeaderProps) => {
  const { children, className, closeButton } = props;
  return (
    <ModalHeader className={className ?? ""} closeButton={closeButton}>
      {children}
    </ModalHeader>
  );
};
export default CustomModalHeader;
