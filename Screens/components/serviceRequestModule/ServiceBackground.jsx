import React from 'react'
import { View, StyleSheet, Text, ScrollView, Button, Alert } from 'react-native'
import ServiceAppbar from './ServiceAppbar'
import ServiceModule from './ServiceModule'
import ServiceCalendar from './ServiceCalendar'
import InputService from './InputService'


const ServiceBackground = () => {
  return (
    <View style={styles.contains}>
      <ScrollView>
        <ServiceAppbar />
        <View style={styles.header}>
          <Text style={styles.title}>Drive Market</Text>
        </View>
        <Text style={styles.title}>
          TIPO DE VEHICULO
        </Text>
        <ServiceModule />
        <Text style={styles.title}>
          FECHA DISPONIBLE
        </Text>
        <ServiceCalendar />
        <Text style={styles.title1}>
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
  contains: {
    flex: 1,
    backgroundColor: "rgb(70, 130, 180)",
  },
  title1: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  //Logo
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginLeft: 10,
  },
})

export default ServiceBackground;