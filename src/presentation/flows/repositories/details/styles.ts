import { TextProps } from "react-native";
import styled from "styled-components/native";

interface TextType extends TextProps {
  fontSize?: string;
  color?: string;
  margin?: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_1};
`;

export const Text = styled.Text<TextType>`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${(props) => props.fontSize ? props.fontSize : '20px'};
  color: ${(props) => props.color ? props.color : props.theme.colors.BLACK};
  margin: ${(props) => props.margin ? props.margin : '0px'};
`;

export const Content = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.GRAY_2};
`;

export const BoxButton = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.YELLOW_1};
  `;
