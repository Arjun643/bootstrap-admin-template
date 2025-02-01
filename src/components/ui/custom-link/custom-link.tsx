import React, { ReactNode } from "react";
import { Link, To } from "react-router-dom";

interface CustomLinkProps {
  className?: string;
  children: ReactNode;
  to: To;
  href?: string;
  onClick?: () => void;
}

const CustomLink: React.FC<CustomLinkProps> = ({ children, className = "", to, href, onClick }) => {
  return href ? (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default CustomLink;
