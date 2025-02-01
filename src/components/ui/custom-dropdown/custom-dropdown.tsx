import React, { ReactNode } from "react";
import { Dropdown, DropdownToggleProps, DropdownMenuProps, DropdownItemProps, DropdownProps } from "react-bootstrap";

interface CustomDropdownProps extends DropdownProps {
  className?: string;
  children: ReactNode;
}

interface CustomDropdownStaticComponents {
  Toggle: React.FC<DropdownToggleProps>;
  Menu: React.FC<DropdownMenuProps>;
  Item: React.FC<DropdownItemProps>;
  ItemText: React.FC<{ children: ReactNode }>;
  Divider: React.FC;
  Header: React.FC<{ children: ReactNode }>;
}

const CustomDropdown: React.FC<CustomDropdownProps> & CustomDropdownStaticComponents = ({ children, className, ...rest }) => {
  return (
    <Dropdown className={className ?? ""} {...rest}>
      {children}
    </Dropdown>
  );
};

CustomDropdown.Toggle = ({ children, ...rest }) => {
  return <Dropdown.Toggle {...rest}>{children}</Dropdown.Toggle>;
};
CustomDropdown.Toggle.displayName = "CustomDropdown.Toggle";

CustomDropdown.Menu = ({ children, ...rest }) => {
  return <Dropdown.Menu {...rest}>{children}</Dropdown.Menu>;
};
CustomDropdown.Menu.displayName = "CustomDropdown.Menu";

CustomDropdown.Item = ({ children, ...rest }) => {
  return <Dropdown.Item {...rest}>{children}</Dropdown.Item>;
};
CustomDropdown.Item.displayName = "CustomDropdown.Item";

CustomDropdown.ItemText = ({ children, ...rest }) => {
  return <Dropdown.ItemText {...rest}>{children}</Dropdown.ItemText>;
};
CustomDropdown.ItemText.displayName = "CustomDropdown.ItemText";

CustomDropdown.Divider = () => {
  return <Dropdown.Divider />;
};
CustomDropdown.Divider.displayName = "CustomDropdown.Divider";

CustomDropdown.Header = ({ children, ...rest }) => {
  return <Dropdown.Header {...rest}>{children}</Dropdown.Header>;
};
CustomDropdown.Header.displayName = "CustomDropdown.Header";

export default CustomDropdown;
