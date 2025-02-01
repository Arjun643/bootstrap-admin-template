import { ReactNode } from "react";
import { Row } from "react-bootstrap";

interface CustomRowProps {
  className?: string;
  children: ReactNode;
  id?: string;
}

export const CustomRow = (props: CustomRowProps) => {
  const { className, children, id } = props;
  return (
    <Row className={className ?? ""} id={id}>
      {children}
    </Row>
  );
};
export default CustomRow;
