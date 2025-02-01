import React, { ReactNode, forwardRef } from "react";
import { Navbar, NavbarProps } from "react-bootstrap";

interface CustomNavProps extends NavbarProps {
  className?: string;
  children: ReactNode;
  ref?: string;
  id?: string;
}

export const CustomNavbar = forwardRef<HTMLElement, CustomNavProps>((props, ref) => {
  const { children, className, expand, id } = props;
  return (
    <Navbar className={className ?? ""} expand={expand ?? "lg"} id={id ?? ""} ref={ref as React.Ref<HTMLDivElement>}>
      {children}
    </Navbar>
  );
});
// Add displayName for better debugging
CustomNavbar.displayName = "CustomNavbar";
export default CustomNavbar;
