import Text from "components/atoms/Text";
import { HeaderWrapper, Logo, NavibarWrapper } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <Text content="ToDo" color="#fff" fontSize="32px" fontWeight="700" />
      </Logo>
      <NavibarWrapper>
        <Text content="List" color="#fff" fontSize="28px" fontWeight="700" />
      </NavibarWrapper>
    </HeaderWrapper>
  );
};

export default Header;
