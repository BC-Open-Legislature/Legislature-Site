import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Colours, Font } from '../../style';
import StandardText from '../StandardText';

interface Props {
  iconURL: string,
  name: string,
  titles?: string,
  party: string,
  location: string
}

export default function MemberListItem(props: Props): React.ReactElement {
  return (
    <View style={ styles.paddedBox }>
      <Image
        style={ styles.icon } 
        source={ { uri: props.iconURL } }
      ></Image>
      <View style={ styles.infoPaddedBox }>
        <StandardText colour={ Colours.Clickable.Clickable } fontSize={ Font.FontSize.ClickableH1 } >{ props.name }</StandardText>
        { props.titles != "" ? ( <StandardText colour={ Colours.Black[100] } fontSize={ Font.FontSize.H2 } >{ props.titles }</StandardText> ) : null }
        <StandardText colour={ Colours.Black[100] } fontSize={ Font.FontSize.H2 } >{ `${props.party} MLA for` }</StandardText>
        <StandardText colour={ Colours.Black[100] } fontSize={ Font.FontSize.H2 } >{ props.location }</StandardText>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  paddedBox: {
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
  },
  infoPaddedBox: {
    padding: 15,
    width: 200,
  },
  icon: {
    width: 110,
    height: 150,
    
    borderColor: Colours.Black[100],
    borderStyle: 'solid',
    borderWidth: 2.5,
  }
});