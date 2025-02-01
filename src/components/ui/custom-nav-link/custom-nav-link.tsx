import React, { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-bootstrap";

interface CustomNavLinkProps extends NavLinkProps {
  className?: string;
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const CustomNavLink = (props: CustomNavLinkProps) => {
  const { children, className, href, onClick } = props;
  return (
    <NavLink className={className ?? ""} href={href} onClick={onClick}>
      {children}
    </NavLink>
  );
};
export default CustomNavLink;
