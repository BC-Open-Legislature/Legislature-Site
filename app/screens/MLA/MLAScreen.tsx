import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator, Platform } from 'react-native';
import { Colours, Font } from '../../style';
import NavigationBars from '../../components/NavigationBars';
import StandardText from '../../components/StandardText'
import MemberListItem from '../../components/MemberListItem';
import { apiURL } from '../../constants/Constants'

export default function MLAScreen ({ navigation }) {
  const [hasMemberData, setHasMemberData] = useState(false);;
  const [memberData, setMemberData] = useState([]);

  const getMemberData = async () => {
    const data = await fetch(`${apiURL}mla`)
    setMemberData(await data.json());
    setHasMemberData(true);
  }
  
  useEffect(() => {
    getMemberData();
  }, []);
    
  if (hasMemberData === true) {
    let members: any[] = []
    memberData.forEach(member => {
      members.push(
        <MemberListItem
          iconURL={ member.image }
          location={ member.member_data.location }
          name={ member.name }
          party={ member.member_data.party }
          titles={ member.member_data.titles }
          onPress={ () => navigation.navigate('MLAs/Member', member) }
          key={ member['abreviated_name'] }
        ></MemberListItem>
      )
    })

    return (
      <NavigationBars>
        <ScrollView style={ [styles.containerWithPadding, Platform.OS === 'web' ? styles.containerWithPaddingWeb : null] }>
          <StandardText colour={ Colours.Black[100] } fontSize={ Font.FontSize.H1 }>{ 'Members Of The Legislative Assembly' }</StandardText>
          <View style={ [styles.memberContainer, Platform.OS === 'web' ? styles.memberContainerWeb : null] }>
            { members }
          </View>
        </ScrollView>
      </NavigationBars>
    );
  } else {
    return (
      <NavigationBars>
        <View style={ styles.containerCentered }>
          <ActivityIndicator size='large' color={ Colours.Black[100] } />
          <StandardText colour={ Colours.Black[80] } fontSize={ Font.FontSize.H1 }>{ 'Loading...' }</StandardText>
        </View>
      </NavigationBars>
    )
  }
}

const styles = StyleSheet.create({
  containerWithPadding: {
    backgroundColor: Colours.Secondary[100],
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
