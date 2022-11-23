import styled from "styled-components";
import { ThemeConfig } from "styles/theme";

export const DetailWrapper = styled.div`
  min-width: 800px;
  min-height: 885px;
  background-color: ${ThemeConfig.black_main};
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 60px 50px;
`;

export const TextAreaWrapper = styled.textarea`
  background-color: ${ThemeConfig.black_main};
  border: none;
  width: 100%;
  height: 100%;
  resize: none;
  outline: none;
  color: ${ThemeConfig.white};
  font-family: "Noto Sans KR";
  font-size: 22px;
  font-weight: 500;
`;
