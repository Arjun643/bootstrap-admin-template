import  { ReactNode } from "react";
import { CardText, CardTextProps } from "react-bootstrap";

interface CustomCardTextProps extends CardTextProps {
  className?: string;
  children: ReactNode;
}

export const CustomCardText = (props: CustomCardTextProps) => {
  const { children, className } = props;
  return <CardText className={className ?? ""}>{children}</CardText>;
};
export default CustomCardText;
