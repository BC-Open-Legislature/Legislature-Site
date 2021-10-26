import React from "react";
import { TouchableHighlight, View } from "react-native";
import StandardText from '../StandardText'
import { Colours, Font, Layout } from '../../style/'
import Tag from '../Tag'

interface Props {
  children: string;
  type: (
    'Greens' | 'NDP' | 'BCLiberals' | 'OtherParty' | 'Independent' |
    'Yes' | 'No' | 'Other' | 'None'
  );
  onPress: any;
}

export default function EventInfo(props: Props): React.ReactElement {
  return (
    <TouchableHighlight onPress={props.onPress} underlayColor={ null }>
      <View>
          <Tag type={ props.type } />
          <View style={{ paddingLeft: Layout.Spacing.x1}}>
              <StandardText colour={ Colours.Black[100] } fontSize={ Font.FontSize.H2 } >
                  {props.children}
              </StandardText>
          </View>
      </View>
    </TouchableHighlight>
  );
}