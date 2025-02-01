import  { ReactNode } from "react";
import { CardTitle, CardTitleProps } from "react-bootstrap";

interface CustomCardBodyProps extends CardTitleProps {
  className?: string;
  children: ReactNode;
}

export const CustomCardTitle = (props: CustomCardBodyProps) => {
  const { children, className } = props;
  return <CardTitle className={className ?? ""}>{children}</CardTitle>;
};
export default CustomCardTitle;
