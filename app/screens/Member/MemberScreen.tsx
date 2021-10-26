import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator, Platform } from 'react-native';
import { Colours, Font } from '../../style';
import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar'
import StandardText from '../../components/StandardText'
import { apiURL } from '../../constants/Constants'

export default function MemberScreen ({ route, navigation }) {
  const memberData = route.params;

  const [hasRecentMemberData, setHasRecentMemberData] = useState(false);;
  const [recentMemberData, setRecentMemberData] = useState([]);

  const getRecentMemberData = async () => {
    const data = await fetch(
      `${apiURL}mla/${memberData.abreviated_name}/recent_data`
    )
    setRecentMemberData(await data.json());
    setHasRecentMemberData(true);
  }
  
  useEffect(() => {
    getRecentMemberData();
  }, []);
    
  if (hasRecentMemberData === true) {
    return (
      <ScrollView style={ [styles.containerWithPadding, Platform.OS === 'web' ? styles.containerWithPaddingWeb : null] }>
      </ScrollView>
    )
  } else {
    return (
      <View style={ [styles.container, styles.containerCentered] }>
        <ActivityIndicator size='large' color={ Colours.Black[100] } />
        <StandardText colour={ Colours.Black[80] } fontSize={ Font.FontSize.H1 }>{ 'Loading...' }</StandardText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.Secondary[100],
    height: '100%',
    width: '100%',
  },
  containerWithPadding: {
    height: '100%',
    width: '100%',
    padding: 15,
    paddingTop: 90,
  },
  containerWithPaddingWeb: {
    height: '100%',
    width: '100%',
    padding: 15,
    paddingTop: 52.5,
  },
  memberContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 127.5,
  },
  memberContainerWeb: {
    paddingBottom: 42.5,
  },
  containerCentered: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
});
