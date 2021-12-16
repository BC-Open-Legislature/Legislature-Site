import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator, Platform } from 'react-native';
import { Colours, Font } from '../../style';
import NavigationBars from '../../components/NavigationBars';
import StandardText from '../../components/StandardText'
import { apiURL } from '../../constants/Constants'
import DebatesIndex from '../../components/DebateIndex'

export default function DebatesScreen ({ route, navigation }) {
  const [hasDebateIndexes, setHasDebateIndexes] = useState(false);
  const [debateIndexes, setdebateIndexes] = useState([]);
  const [currentType, setCurrentType] = useState({
    type: route.params == undefined ? 'year' : route.params,
    key: null
  });

  const getDebateIndexes = async () => {
    const data = await fetch(
      `${apiURL}debates`
    )

    setdebateIndexes(await data.json());
    setHasDebateIndexes(true);
  }
  
  useEffect(() => {
    getDebateIndexes();
  }, []);
    
  if (hasDebateIndexes === true) {
    return (
      <NavigationBars navigator={ navigation }>
        <ScrollView style={ [styles.containerWithPadding, Platform.OS === 'web' ? styles.containerWithPaddingWeb : null] }>
        </ScrollView>
      </NavigationBars>
    )
  } else {
    return (
      <NavigationBars navigator={ navigation }>
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
  debatesContainer: {
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
  }
});
