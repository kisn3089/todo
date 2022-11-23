import styled from "styled-components";
import { ThemeConfig } from "styles/theme";

export const DateBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 80px;
  background-color: ${ThemeConfig.black_main};
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;
