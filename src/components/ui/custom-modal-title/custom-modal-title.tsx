import  { ReactNode } from "react";
import { ModalTitle, ModalTitleProps } from "react-bootstrap";

interface CustomModalTitleProps extends ModalTitleProps {
  className?: string;
  children: ReactNode;
}

export const CustomModalTitle = (props: CustomModalTitleProps) => {
  const { children, className } = props;
  return <ModalTitle className={className ?? ""}>{children}</ModalTitle>;
};
export default CustomModalTitle;
