import React from "react";
import { ProgressBar, ProgressBarProps } from "react-bootstrap";

interface CustomProgressBarProps extends ProgressBarProps {
  className?: string;
}

export const CustomProgressBar: React.FC<CustomProgressBarProps> = props => {
  const { className, ...restProps } = props;

  return <ProgressBar className={className ?? ""} {...restProps} />;
};

export default CustomProgressBar;
