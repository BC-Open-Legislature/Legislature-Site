import React from "react";
import { View } from "react-native";
import TopBar from '../TopBar'
import BottomBar from '../BottomBar'

interface Props {
  children: React.ReactNode;
}

export default function NavigationBars(props: Props): React.ReactElement {
  return (
    <View style={{height: '100%', width: '100%'}}> 
      {props.children}
      <TopBar></TopBar>
      <BottomBar></BottomBar>
    </View>
  );
}
