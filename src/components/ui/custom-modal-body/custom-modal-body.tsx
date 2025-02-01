import { ReactNode } from "react";
import { ModalBody } from "react-bootstrap";

interface CustomModalBodyProps {
  className?: string;
  children: ReactNode;
}

export const CustomModalBody = (props: CustomModalBodyProps) => {
  const { children, className } = props;
  return <ModalBody className={className ?? ""}>{children}</ModalBody>;
};
export default CustomModalBody;
