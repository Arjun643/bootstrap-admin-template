import Ratio from "react-bootstrap/Ratio";

interface CustomIframeProps {
  id?: string;
  className?: string;
  src?: string;
  title: string;
  width?: string;
  height?: string;
  allowFullScreen?: boolean;
  allow?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

export const CustomIframe = (props: CustomIframeProps) => {
  const { id, className, src, title, height, width, referrerPolicy, allowFullScreen, allow } = props;
  return (
    <Ratio className={className ?? ""}>
      <iframe
        id={id}
        src={src}
        title={title}
        width={width}
        height={height}
        allow={allow}
        allowFullScreen={allowFullScreen}
        referrerPolicy={referrerPolicy}></iframe>
    </Ratio>
  );
};

export default CustomIframe;
