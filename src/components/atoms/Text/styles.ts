import styled from "styled-components";

export const StyledText = styled.span`
  display: inline-block;
  color: ${(props) => (props.style?.color ? props.style?.color : "#000")};
  margin: ${(props) => props.style?.margin};
  padding: ${(props) => props.style?.padding};
`;
