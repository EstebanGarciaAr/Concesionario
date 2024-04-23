import React from 'react';
import {View, TextInput,StyleSheet} from 'react-native';

const InputService = () => {
  const [value, onChangeText] = React.useState('Inserte razon para solicitud de servicio');
  return (
    <View style={styles.input}>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    input:{
        backgroundColor: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
})

export default InputService;