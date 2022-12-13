import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_1};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  text-align: center;
  margin-top: 16px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.BLACK};
`;