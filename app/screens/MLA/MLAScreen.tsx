import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import { Colours, Font } from '../../style';
import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar'
import StandardText from '../../components/StandardText'
import MemberListItem from '../../components/MemberListItem';
import { apiURL } from '../../constants/Constants'

export default function MLAScreen () {
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
          iconURL={member['image']}
          location={member['member_data']['location']}
          name={member['name']}
          party={member['member_data']['party']}
          titles={member['member_data']['titles']}
          key={member['abreviated_name']}
        ></MemberListItem>
      )
    })

    return (
      <View style={ styles.container }>
          <StatusBar style='auto' />
          <ScrollView style={ styles.containerWithPadding }>
            <StandardText colour={ Colours.Black[100] } fontSize={ Font.FontSize.H1 }>{ 'Members Of The Legislative Assembly' }</StandardText>
            <View style={ styles.memberContainer }>
              {members}
            </View>
          </ScrollView>
          <TopBar selected={'MLAs'} ></TopBar>
          <BottomBar></BottomBar>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <View style={[styles.container, styles.containerCentered]}>
          <ActivityIndicator size='large' color={Colours.Black[100]} />
          <StandardText colour={Colours.Black[80]} fontSize={Font.FontSize.H1}>{'Loading...'}</StandardText>
        </View>
        
        <TopBar selected={'MLAs'} ></TopBar>
        <BottomBar></BottomBar>
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
    paddingBottom: 42.5,
  },
  memberContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  containerCentered: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

});
