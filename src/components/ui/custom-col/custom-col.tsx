import { ReactNode } from "react";
import { Col, ColProps } from "react-bootstrap";
interface CustomColProps extends Omit<ColProps, "xs" | "sm" | "md" | "lg" | "xl" | "xxl"> {
  className?: string;
  children?: ReactNode;
  xs?: number | "auto";
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

export const CustomCol = (props: CustomColProps) => {
  const { className, children, xxl, xl, lg, md, sm, xs, ...rest } = props;
  return (
    <Col xxl={xxl} xl={xl} md={md} lg={lg} sm={sm} xs={xs} className={className} {...rest}>
      {children}
    </Col>
  );
};

export default CustomCol;
