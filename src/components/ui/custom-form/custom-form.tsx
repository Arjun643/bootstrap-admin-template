import React, { ReactNode } from "react";
import { Form, FormProps } from "react-bootstrap";

interface CustomFormProps extends FormProps {
  className?: string;
  children: ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const CustomForm = (props: CustomFormProps) => {
  const { children, className, onSubmit } = props;
  return (
    <Form className={className ?? ""} onSubmit={onSubmit}>
      {children}
    </Form>
  );
};
export default CustomForm;
