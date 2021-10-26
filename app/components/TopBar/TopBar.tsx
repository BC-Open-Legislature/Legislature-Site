import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import {useRoute} from '@react-navigation/native';
import { Colours, Font } from '../../style'
import StandardText from '../StandardText'

enum SelectableOptions {
  MLAs,
  Debates,
  Bills
}

export default function TopBar(): React.ReactElement {
  let options = []
  for (let selectableOption in SelectableOptions) {
    if (isNaN(Number(selectableOption))) {
      options.push(<StandardText 
        colour={selectableOption.toLocaleLowerCase() != useRoute().name.split('/')[0].toLocaleLowerCase() ? Colours.Secondary[100] : Colours.Tertiary[100]} 
        fontSize={Font.FontSize.H1} 
        style={styles.topBarButton}
        key={selectableOption}
      >{selectableOption}</StandardText>)
    }
  }

  if (Platform.OS === 'web') {
    return (
      <View style={[styles.topBar, styles.topBarWeb]}>
        <View style={[styles.topBarButtonPanel, styles.topBarButtonPanelWeb]}>
          {options}
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.topBar}>
        <View style={styles.topBarButtonSpacer}></View>
        <View style={styles.topBarButtonPanel}>
          {options}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: Colours.Primary[100],
    
    top: '0%',
    height: 75,
    width: '100%',
    position: 'absolute',
    display: 'flex',
    flex: 1
  },
  topBarWeb: {    
    height: 37.5,
  },
  topBarButtonSpacer: {
    flex: 1
  },
  topBarButtonPanel: {
    width: '100%',
    height: '50%',
    bottom: '0%',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-around'
  },
  topBarButtonPanelWeb : {
    height: '100%',
  },
  topBarButton: {
    fontSize: Font.FontSize.H1,
    height: '100%',
    textAlign: 'center',
    flex: 1,
  }
});