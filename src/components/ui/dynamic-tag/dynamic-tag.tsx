import React, { JSX, ReactNode, forwardRef, ElementType } from "react";

interface DynamicHtmlTagsProps {
  type?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  className?: string;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onScroll?: React.UIEventHandler<HTMLElement>;
  tabIndex?: number;
  role?: string;
  style?: React.CSSProperties;
  title?: string;
  htmlFor?: string;
}

const DynamicHtmlTag = forwardRef<HTMLElement, DynamicHtmlTagsProps>((props, ref) => {
  const { type = "div", id, children, className, onClick, tabIndex, role, style, onScroll, title, htmlFor } = props;

  const Tag = type as ElementType;

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={className}
      id={id}
      onClick={onClick}
      tabIndex={tabIndex}
      onScroll={onScroll}
      role={role}
      style={style}
      title={title}
      htmlFor={htmlFor}>
      {children}
    </Tag>
  );
});

DynamicHtmlTag.displayName = "DynamicHtmlTag";

export default DynamicHtmlTag;
