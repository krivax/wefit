import { TextProps } from "react-native";
import styled from "styled-components/native";

interface TextType extends TextProps {
  color?: string;
  fontSize?: string;
}

export const CardContainer = styled.TouchableOpacity`
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  background-color: ${({ theme }) => theme.colors.GRAY_2};
  border-radius: 4px;
  margin: 16px 16px 0 16px;
  
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.BLACK};
`;

export const Avatar = styled.Image`
  width: 29px;
  height: 29px;
  border-radius: 50px;
`;

export const Text = styled.Text<TextType>`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "12px")};
  line-height: 15px;
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.GRAY_3)};
`;

export const CardHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 19px 0 16px 0;
  margin: 0 16px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.colors.GRAY_3};
`;

export const CardContent = styled.View`
  margin: 16px;
`;

export const CardFooter = styled.View`
  width: 100%;
  flex-direction: row;
  display: flex;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 8px 10px;
  width: 103px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.YELLOW_2};
  color: ${({ theme }) => theme.colors.YELLOW_1};
`;