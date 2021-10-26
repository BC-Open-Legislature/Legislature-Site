import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator, Platform } from 'react-native';
import { Colours, Font, Layout } from '../../style';
import NavigationBars from '../../components/NavigationBars';
import StandardText from '../../components/StandardText'
import { apiURL } from '../../constants/Constants'
import MemberProfile from '../../components/MemberProfile';

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
      <NavigationBars>
        <ScrollView style={ [styles.containerWithPadding, Platform.OS === 'web' ? styles.containerWithPaddingWeb : null] }>
          <MemberProfile 
            iconURL={ memberData.image }
            location={ memberData.member_data.location }
            name={ memberData.name }
            party={ memberData.member_data.party }
            titles={ memberData.member_data.titles }
          ></MemberProfile>
          <View style={{ padding: Layout.Spacing.x1, paddingLeft: Layout.Spacing.x3 }}>
            <StandardText colour={ Colours.Clickable.Clickable } fontSize={ Font.FontSize.H2 }>{ 'About' }</StandardText>
            <View style={{paddingLeft: Layout.Spacing.x1 }}>
              <StandardText colour={ Colours.Black[100] } fontSize={ Font.FontSize.H2 }>{ memberData.about }</StandardText>
            </View>
          </View>
        </ScrollView>
      </NavigationBars>
    )
  } else {
    return (
      <NavigationBars>
        <View style={ [styles.container, styles.containerCentered] }>
          <ActivityIndicator size='large' color={ Colours.Black[100] } />
          <StandardText colour={ Colours.Black[80] } fontSize={ Font.FontSize.H1 }>{ 'Loading...' }</StandardText>
        </View>
      </NavigationBars>
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
  containerCentered: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
});
