import Text from "components/atoms/Text";
import { HeaderWrapper, Logo, NavibarWrapper } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <Text
          content="ToDo"
          color="#F7BE3B"
          fontSize="32px"
          fontWeight="700"
          fontFamily="Noto Sans KR"
        />
      </Logo>
      <NavibarWrapper>
        <Text
          content="List"
          color="#F7BE3B"
          fontSize="30px"
          fontWeight="700"
          fontFamily="Noto Sans KR"
        />
      </NavibarWrapper>
    </HeaderWrapper>
  );
};

export default Header;
