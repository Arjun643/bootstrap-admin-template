import React, { forwardRef } from "react";
import { Form } from "react-bootstrap";

export interface CustomInputProps {
  type: string;
  className?: string;
  defaultValue?: string | number | readonly string[] | undefined;
  value?: string | number | string[] | undefined; // Change readonly string[] to string[]
  name?: string;
  placeholder?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  id?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
  maxLength?: number;
  validate?: boolean;
  accept?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>((props, ref) => {
  const {
    type,
    className,
    defaultValue,
    accept,
    value,
    name,
    placeholder,
    checked,
    defaultChecked,
    onChange,
    disabled,
    readOnly,
    id,
    onKeyDown,
    maxLength,
    onPaste,
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Form.Control
      type={type ?? "text"}
      className={className}
      defaultValue={defaultValue}
      value={value}
      accept={accept}
      name={name}
      placeholder={placeholder}
      checked={checked}
      defaultChecked={defaultChecked}
      onChange={handleChange}
      disabled={disabled}
      readOnly={readOnly}
      id={id}
      ref={ref}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      maxLength={maxLength}
    />
  );
});

CustomInput.displayName = "CustomInput";

export default CustomInput;
