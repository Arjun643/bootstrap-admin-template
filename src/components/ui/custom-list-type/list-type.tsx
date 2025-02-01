import { ReactNode } from "react";
import { ListGroup, ListGroupProps } from "react-bootstrap";

interface ListTypeProps extends ListGroupProps {
  variant?: "flush" | string;
  horizontal?: boolean | string | "sm" | "md" | "lg" | "xl" | "xxl";
  numbered?: boolean;
  className?: string;
  children: ReactNode;
  listAs?: "ul" | "ol";
}

export const CustomListType = (props: ListTypeProps) => {
  const { variant, horizontal, listAs, className, children } = props;
  return (
    <ListGroup className={className ?? ""} variant={variant ?? ""} as={listAs ?? "ul"} horizontal={horizontal ?? ""}>
      {children}
    </ListGroup>
  );
};
export default CustomListType;
