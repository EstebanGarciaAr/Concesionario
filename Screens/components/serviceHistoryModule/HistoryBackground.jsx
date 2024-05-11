import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import HistoryAppbar from './HistoryAppbar'
import HistoryModule from './HistoryModule'


const HistoryBackground = () => {
  return (
    <View style={styles.contains}>
        <HistoryAppbar/>
        <View style={styles.header}>
                <Text style={styles.title1}>Drive Market</Text>
            </View>
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
    backgroundColor: "rgb(70, 130, 180)",
  },
header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
},
//Logo
title1: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginLeft: 10,
},
  
  title:{
    color:'white',
    fontSize:25,
    textAlign:'center',
    fontWeight:'bold',
  }
})

export default HistoryBackground;