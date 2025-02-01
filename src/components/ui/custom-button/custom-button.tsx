import { MouseEvent, ReactNode } from "react";
import { Button, ButtonProps } from "react-bootstrap";

interface CustomButtonProps extends ButtonProps {
  className?: string;
  href?: string;
  target?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

export const CustomButton = (props: CustomButtonProps) => {
  const { size, children, href, target, className, onClick, disabled, type, variant } = props;

  return (
    <Button
      size={size}
      onClick={onClick}
      className={className}
      href={href}
      target={target ?? ""}
      disabled={disabled}
      type={type ?? "button"}
      variant={variant} // Pass variant prop here
    >
      {children}
    </Button>
  );
};

export default CustomButton;
