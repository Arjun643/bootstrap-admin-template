import { ReactNode } from "react";
import { FormGroup, FormGroupProps } from "react-bootstrap";

interface CustomFormGroupProps extends FormGroupProps {
  className?: string;
  children: ReactNode;
  id?: string;
}

export const CustomFormGroup = (props: CustomFormGroupProps) => {
  const { children, className, id } = props;
  return (
    <FormGroup className={className ?? ""} id={id}>
      {children}
    </FormGroup>
  );
};
export default CustomFormGroup;
