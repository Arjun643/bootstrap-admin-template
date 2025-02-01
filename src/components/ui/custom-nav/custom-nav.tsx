import  { ReactNode } from "react";
import { Nav, NavProps } from "react-bootstrap";

interface CustomNavProps extends NavProps {
  className?: string;
  children: ReactNode;
}

export const CustomNav = (props: CustomNavProps) => {
  const { children, className } = props;
  return <Nav className={className ?? ""}>{children}</Nav>;
};
export default CustomNav;
