import  { ReactNode } from "react";
import { CardBody, CardBodyProps } from "react-bootstrap";

interface CustomCardBodyProps extends CardBodyProps {
  className?: string;
  children: ReactNode;
}

export const CustomCardBody = (props: CustomCardBodyProps) => {
  const { children, className } = props;
  return <CardBody className={className ?? ""}>{children}</CardBody>;
};
export default CustomCardBody;
