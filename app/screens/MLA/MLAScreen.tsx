import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colours } from '../../style/colours';
import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar'

export default function App () {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <TopBar selected={'MPs'} ></TopBar>
        <BottomBar></BottomBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.Secondary[100],
    height: '100%',
    width: '100%'
  },
});
