import { ReactNode } from "react";
import { ListGroupItem, ListGroupItemProps } from "react-bootstrap";

interface ListItemsProps extends ListGroupItemProps {
  children: ReactNode;
  className?: string;
  id?: string;
  role?: string;
  variant?: string;
  listAs?: "li";
}

export const CustomListItems = (props: ListItemsProps) => {
  const { variant, listAs, children, className, id, role } = props;
  return (
    <ListGroupItem className={className} id={id ?? ""} role={role ?? ""} as={listAs ?? "li"} variant={variant ?? ""}>
      {children}
    </ListGroupItem>
  );
};
export default CustomListItems;
