import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import NotificationAppbar from './NotificationAppbar'
import NotificationModule from './NotificationModule'


const NotificationBackground = () => {
  return (
    <View style={styles.contains}>
        <NotificationAppbar/>
        <Text style={styles.title}>
        BUZON DE MENSAJES 
      </Text>
        <NotificationModule/>
    </View>
  )
}

const styles = StyleSheet.create({
  contains:{
    flex:1,
    backgroundColor: "rgb(70, 130, 180)",
  },
  title:{
    color:'white',
    fontSize:25,
    textAlign:'center',
    fontWeight:'bold',
  }
})

export default NotificationBackground;