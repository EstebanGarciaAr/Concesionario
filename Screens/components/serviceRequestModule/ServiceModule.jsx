import React from 'react';
import {SafeAreaView,View,FlatList,StyleSheet,Text,StatusBar,} from 'react-native';

const DATA = [
    {
        id: '1',
        title: 'vehiculo uno',
      },
      {
        id: '2',
        title: 'vehiculo dos',
      },
      {
        id: '3',
        title: 'vehiculo tres',
      },
      {
        id: '4',
        title: 'vehiculo cuatro',
      },
      {
        id: '5',
        title: 'vehiculo cinco',
      },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ServiceModule = () => {
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

export default ServiceModule;