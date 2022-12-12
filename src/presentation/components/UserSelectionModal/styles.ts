import styled from "styled-components/native";
import { Modalize } from "react-native-modalize";
import { TextProps, TouchableOpacityProps } from "react-native";

interface ButtonType extends TouchableOpacityProps {
  bColor?: boolean;
}
interface TextType extends TextProps {
  color?: string;
  fontSize?: string;
  margin?: string;
}

export const Container = styled(Modalize).attrs({
  adjustToContentHeight: true,
  handlePosition: "inside",
  childrenStyle: {
    padding: 16,
  },
})`
  background-color: ${({ theme }) => theme.colors.GRAY_2};
`;
export const Text = styled.Text<TextType>`
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  font-family: ${({ theme }) => theme.fonts.NORMAL};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.BLACK)};
  line-height: 24px;

`;
export const Box = styled.View`
  background-color: ${({ theme }) => theme.colors.GRAY_1};
  font-size: 8px;
  line-height: 24px;
  border-radius: 4px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.GRAY_3};
`;
export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.GRAY_1};
  font-family: ${({ theme }) => theme.fonts.NORMAL};
  font-size: 15px;
  line-height: 24px;
  padding: 0px 10px 2px;
`;
export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 10px 0px;
`;
export const Button = styled.TouchableOpacity<ButtonType>`
  background-color: ${(props) => (props.bColor ? '#1976D2' : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 174px;
  height: 42px;
`;