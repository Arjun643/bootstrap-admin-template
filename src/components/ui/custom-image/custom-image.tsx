import { Image, ImageProps } from "react-bootstrap";

interface CustomImageProps extends ImageProps {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const CustomImage = (props: CustomImageProps) => {
  const { className, src, alt, width, height } = props;
  return <Image className={className ?? ""} src={src} alt={alt} width={width} height={height} />;
};
export default CustomImage;
