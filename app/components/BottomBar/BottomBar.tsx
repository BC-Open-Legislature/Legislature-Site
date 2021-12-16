import React from "react";
import { StyleSheet, View } from "react-native";
import { Colours } from '../../style'

export default function BottomBar(): React.ReactElement {
  return <View style={styles.bottomBar}></View>;
}

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: Colours.Primary[100],
    
    bottom: '0%',
    height: 37.5,
    width: '100%',
    position: 'absolute',
  }
});
