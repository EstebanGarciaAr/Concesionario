import React from 'react'
import { View, StyleSheet, Text, ScrollView, Button, Alert} from 'react-native'
import ServiceAppbar from './ServiceAppbar'
import ServiceModule from './ServiceModule'
import ServiceCalendar from './ServiceCalendar'
import InputService from './InputService'


const ServiceBackground = () => {
  return (
    <View style={styles.contains}>
        <ScrollView>
        <ServiceAppbar/>
        <Text style={styles.title}>
            TIPO DE VEHICULO 
        </Text>
        <ServiceModule/>
        <Text style={styles.title}>
            FECHA DISPONIBLE
        </Text>
        <ServiceCalendar/>
        <Text style={styles.title}>
            RAZON MANTENIMIENTO
        </Text>
        <InputService></InputService>
        </ScrollView>
        <Button
        title="Enviar Formulario"
        onPress={() => Alert.alert('Formulario enviado correctamente')}
      />
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

export default ServiceBackground;