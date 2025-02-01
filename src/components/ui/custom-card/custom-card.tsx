import  { ReactNode } from "react";
import { Card, CardProps } from "react-bootstrap";

interface CustomCardProps extends CardProps {
  className?: string;
  children: ReactNode;
}

export const CustomCard = (props: CustomCardProps) => {
  const { children, className } = props;
  return <Card className={className ?? ""}>{children}</Card>;
};
export default CustomCard;
