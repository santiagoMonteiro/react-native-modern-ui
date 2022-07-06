import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  width: 180px;
  height: 250px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  margin: 0 10px;
  border-radius: 10px;
`;

export const Image = styled.Image`
  margin-top: -50px;
  width: 150px;
  height: 150px;
`;
