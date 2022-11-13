import { CSSProperties } from "react";

export interface IText extends CText {
  content?: string;
  className?: string;
  handleClick?: (e: any) => void;
}

export interface CText {
  color?: string;
  padding?: string;
  margin?: string;
  opacity?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  customStyle?: CSSProperties;
}
