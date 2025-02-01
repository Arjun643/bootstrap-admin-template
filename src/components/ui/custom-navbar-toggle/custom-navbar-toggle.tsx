import { NavbarToggle, NavbarToggleProps } from "react-bootstrap";

interface CustomNavbarToggleProps extends NavbarToggleProps {
  className?: string;
}

export const CustomNavbarToggle = (props: CustomNavbarToggleProps) => {
  const { className, label } = props;
  return <NavbarToggle className={className ?? ""} label={label}></NavbarToggle>;
};
export default CustomNavbarToggle;
