import React, { useContext } from "react"; 
import {View, Text} from 'react-native'
import { useNavigation } from "@react-navigation/native";

import CarContext from "../../context/car/carContext";

const ProgressVehicle = ({ route }) => {
    const navigation = useNavigation();
    const { car } = useContext(CarContext);

    // Obtener el vehículo seleccionado de las props
    const { vehicle } = route.params;

    // Destructurar las propiedades del vehículo seleccionado
    const { brand, description, img, model, price, title, year, id } = vehicle;
    return(
        <View>
            <Text>El Id de tu pedido es: {id}</Text>
            <Text>En unos minutos llegara tu pedido!</Text>
        </View>
    );
}

export default ProgressVehicle;