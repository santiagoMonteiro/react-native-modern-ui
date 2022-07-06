import styled from "styled-components/native";

export const Container = styled.TextInput`
  width: 100%;
  height: 54px;
  border: 1px solid #cecece;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: #000;
  padding: 0 16px;
`;
