import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  colour: string,
  fontSize: number,
}

export default function StandardText(props: Props): React.ReactElement {
  const defaultStyle = {
    color: props.colour,
    fontFamily: 'HammersmithOne',
    fontSize: props.fontSize,
    textDecorationLine: 'underline',
  }
  const customStyle = [props.style, defaultStyle];
  
  return <Text {...props} style={customStyle} />;
}
