import { ReactNode } from "react";
import { FormLabel } from "react-bootstrap";

interface CustomFormLabelProps {
  className?: string;
  children: ReactNode;
  htmlFor?: string;
}

export const CustomFormLabel = (props: CustomFormLabelProps) => {
  const { children, className, htmlFor } = props;
  return (
    <FormLabel htmlFor={htmlFor} className={className ?? ""}>
      {children}
    </FormLabel>
  );
};
export default CustomFormLabel;
