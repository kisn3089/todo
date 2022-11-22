import { memo, useMemo } from "react";
import { StyledText } from "./styles";
import { IText } from "./type";

const Text = (props: IText) => {
  const {
    content,
    className,
    color,
    padding,
    margin,
    opacity,
    fontSize,
    fontWeight,
    fontFamily,
    customStyle,
    handleClick,
  } = props;

  const style = useMemo(() => {
    return {
      color,
      padding,
      margin,
      opacity,
      fontSize,
      fontWeight,
      fontFamily,
      ...customStyle,
    };
  }, [color, padding, margin, opacity, fontSize, fontWeight, fontFamily]);

  return (
    <StyledText className={className} style={style} onClick={handleClick}>
      {content}
    </StyledText>
  );
};

export default memo(Text);
