import React from "react";
import { TouchableHighlight, View } from "react-native";
import ClickableStandardText from '../ClickableStandardText';
import { Colours, Font } from '../../style/'

interface Props {
  index: Date;
  type?: String;
  navigator: any;
}

export default function EventInfo(props: Props): React.ReactElement {
  switch (props.type) {
    case 'year':
      return (
        <View>
          <TouchableHighlight onPress={ () => {props.navigator.push('Debates', 'month')} } key={ props.index.getFullYear() }>
            <ClickableStandardText colour={ Colours.Black[100] } fontSize={ Font.FontSize.BarH1 }>{ props.index.getFullYear() }</ClickableStandardText>
          </TouchableHighlight>
        </View>
      )
    default:
      return (
        <View>
          <TouchableHighlight onPress={ () => {props.navigator.push('Debates/Day', props.index)} } key={ props.index.toDateString() }>
            <ClickableStandardText colour={ Colours.Black[100] } fontSize={ Font.FontSize.BarH1 }>{ props.index.toDateString() }</ClickableStandardText>
          </TouchableHighlight>
        </View>
      )
  }
}