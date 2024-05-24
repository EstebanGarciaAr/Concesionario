import React from 'react'
import {View, Text} from 'react-native'

const ProgressVehicle = () => {
    return(
        <View>
            //Falta agregar algo para traer el id del pedido del componente pasado y ponerlo en pantalla
            <Text>El Id de tu pedido es: </Text>
            <Text>En unos minutos llegara tu pedido!</Text>
        </View>
    );
}

export default ProgressVehicle;