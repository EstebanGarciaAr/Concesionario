import React, {useState} from 'react';
import {FlatList,SafeAreaView,StatusBar,StyleSheet,Text,TouchableOpacity,} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Mensaje uno',
  },
  {
    id: '2',
    title: 'Mensaje dos',
  },
  {
    id: '3',
    title: 'Mensaje tres',
  },
  {
    id: '4',
    title: 'Mensaje cuatro',
  },
  {
    id: '5',
    title: 'Mensaje cinco',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const NotificationModule = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#a2c0d9' : 'white';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
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
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
});

export default NotificationModule;