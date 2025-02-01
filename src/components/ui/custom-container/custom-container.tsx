import { ReactNode } from "react";
import { Container } from "react-bootstrap";

interface CustomContainerProps {
  className?: string;
  children: ReactNode;
  fluid?: string;
}

export const CustomContainer = (props: CustomContainerProps) => {
  const { children, className, fluid } = props;
  return (
    <Container fluid={fluid ?? ""} className={className ?? ""}>
      {children}
    </Container>
  );
};
export default CustomContainer;
