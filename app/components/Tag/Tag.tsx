import React from "react";
import { StyleSheet, View } from "react-native";
import StandardText from '../StandardText'
import { Colours, Font } from '../../style/'

interface Props {
  type: (
    'Greens' | 'NDP' | 'BCLiberals' | 'OtherParty' | 'Independent' |
    'Yes' | 'No' | 'Other' | 'None'
  )
}

export default function Tag(props: Props): React.ReactElement {
  const colour = Colours.Option[props.type] ? Colours.Option[props.type] : Colours.Party[props.type]

  const style = StyleSheet.create({
    viewStyle : {
      backgroundColor: colour,
      borderRadius: 3.62,
      alignSelf: 'flex-start',
      paddingLeft: 4,
      paddingRight: 5
    }
  })

  return (
    <View style={ style.viewStyle }>
      <StandardText colour={ Colours.Black[100] } fontSize={ Font.FontSize.TagH1 } >{ props.type }</StandardText>
    </View>
  );
}