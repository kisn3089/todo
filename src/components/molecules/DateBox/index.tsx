import Text from "components/atoms/Text";
import React from "react";
import { ThemeConfig } from "styles/theme";
import { DateBoxWrapper } from "./styles";

export interface IDateBox {
  date: number;
}

const DateBox = (props: IDateBox) => {
  const { date } = props;
  return (
    <DateBoxWrapper>
      <Text
        content={String(date)}
        color={ThemeConfig.white}
        fontFamily="Noto Sans KR"
        fontWeight="700"
        fontSize="25px"
      />
    </DateBoxWrapper>
  );
};

export default DateBox;
