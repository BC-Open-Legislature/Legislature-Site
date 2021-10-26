import React, { useState } from "react";
import { Text, TextStyle, StyleProp, View, TouchableHighlight } from "react-native";
import { Colours } from '../../style/'
import ClickableStandardText from '../ClickableStandardText';

interface Props {
  style?: StyleProp<TextStyle>;
  children: string;
  fontSize: number,
}

export default function StandardText(props: Props): React.ReactElement {
  const [showFull, setShowFull] = useState(false);;

  const defaultStyle = {
    fontFamily: 'HammersmithOne',
    fontSize: props.fontSize,
    color: Colours.Black[100]
  }
  
  const customStyle = [props.style, defaultStyle];
  
  return (
    <View>
      <Text style={customStyle}>{ showFull? props.children : props.children.substr(0, 350) }</Text>
      <TouchableHighlight onPress={ () => { setShowFull( !showFull ) }} underlayColor={null}>
        <ClickableStandardText fontSize={ props.fontSize } colour={ Colours.Clickable.Clickable } >
            {showFull ? 'Show Less' : 'Show More'}
        </ClickableStandardText>
      </TouchableHighlight>
    </View>
  );
}
