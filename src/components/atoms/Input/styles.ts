import styled from "styled-components";

export const StyledInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: left;
  border-radius: ${(props) =>
    props.style?.borderRadius ? props.style?.borderRadius : "0"};
  background-color: ${(props) =>
    props.style?.backgroundColor
      ? props.style?.backgroundColor
      : props.theme.dp00};
  border: ${(props) => (props.style?.border ? props.style?.border : 0)};
  width: ${(props) => (props.style?.width ? props.style?.width : "270px")};
  height: ${(props) => (props.style?.height ? props.style?.height : "40px")};
  padding: ${(props) => (props.style?.padding ? props.style?.padding : "0")};
  font-size: ${(props) =>
    props.style?.fontSize ? props.style?.fontSize : "16px"};
  color: ${(props) =>
    props.style?.color ? props.style?.color : props.theme.white};
  transition: 0.3s;
  box-sizing: border-box;
  &::placeholder {
    font-size: ${(props) =>
      props.style?.fontSize ? props.style?.fontSize : "14px"};
    color: #000;
    opacity: 0.3;
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
  &:hover {
  }
  &[type="search"] {
    padding: 0.625rem 0 0.625rem 15px;
    ::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
    &:focus {
      background: none;
      /* padding-left: 1.625rem; */
      outline: none;
      ::-webkit-search-cancel-button {
        -webkit-appearance: none;
        min-width: 16px;
        min-height: 16px;
        width: 1rem;
        height: 1rem;
        padding-right: 1rem;
        cursor: pointer;
      }
    }
    &:hover {
      outline: none;
    }
  }
  &.login {
    &.email {
      &:focus,
      &:hover {
        outline: none;
        border-bottom: 0.0625rem solid ${({ theme }) => theme.dp03};
      }
      border-bottom: 0.0625rem solid ${({ theme }) => theme.dp03};
    }
    &.pwd {
      &:focus,
      &:hover {
        outline: none;
        border-top: 0.0625rem solid ${({ theme }) => theme.dp03};
      }
      border-top: 0.0625rem solid ${({ theme }) => theme.dp03};
    }
  }
`;
