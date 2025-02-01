import { ReactNode } from "react";
import { NavbarCollapse, NavbarCollapseProps } from "react-bootstrap";

interface CustomNavbarCollapseProps extends NavbarCollapseProps {
  className?: string;
  children: ReactNode;
  id?: string;
}

export const CustomNavbarCollapse = (props: CustomNavbarCollapseProps) => {
  const { children, className, id } = props;
  return (
    <NavbarCollapse className={className ?? ""} id={id ?? ""}>
      {children}
    </NavbarCollapse>
  );
};
export default CustomNavbarCollapse;
