import { ReactNode } from "react";
import { NavbarBrand, NavbarBrandProps } from "react-bootstrap";

interface CustomNavbarBrandProps extends NavbarBrandProps {
  className?: string;
  children: ReactNode;
}

export const CustomNavbarBrand = (props: CustomNavbarBrandProps) => {
  const { children, className, href } = props;
  return (
    <NavbarBrand className={className ?? ""} href={href}>
      {children}
    </NavbarBrand>
  );
};
export default CustomNavbarBrand;
