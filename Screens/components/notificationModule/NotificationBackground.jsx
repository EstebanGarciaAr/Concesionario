import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import NotificationAppbar from './NotificationAppbar'
import NotificationModule from './NotificationModule'


const NotificationBackground = () => {
  return (
    <View style={styles.contains}>
        <NotificationAppbar/>
        <View style={styles.header}>
                <Text style={styles.titleLogo}>Drive Market</Text>
            </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
},
//Logo
titleLogo: {
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

export default NotificationBackground;