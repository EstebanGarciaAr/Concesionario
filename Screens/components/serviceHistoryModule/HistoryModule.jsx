import React from 'react';
import {SafeAreaView,View,FlatList,StyleSheet,Text,StatusBar,} from 'react-native';

const DATA = [
    {
        id: '1',
        title: 'servicio uno',
      },
      {
        id: '2',
        title: 'servicio dos',
      },
      {
        id: '3',
        title: 'servicio tres',
      },
      {
        id: '4',
        title: 'servicio cuatro',
      },
      {
        id: '5',
        title: 'servicio cinco',
      },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HistoryModule = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    color:'black'
  },
});

export default HistoryModule;