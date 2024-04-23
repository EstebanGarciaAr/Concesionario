import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import HistoryAppbar from './HistoryAppbar'
import HistoryModule from './HistoryModule'


const HistoryBackground = () => {
  return (
    <View style={styles.contains}>
        <HistoryAppbar/>
        <Text style={styles.title}>
        HISTORIAL DE SERVICIOS 
      </Text>
      <HistoryModule/>
    </View>
  )
}

const styles = StyleSheet.create({
  contains:{
    flex:1,
    backgroundColor:'#4682b4',
  },
  title:{
    color:'black',
    fontSize:25,
    textAlign:'center',
    fontWeight:'bold',
  }
})

export default HistoryBackground;