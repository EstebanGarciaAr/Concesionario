import React, { useContext, useEffect, useState } from "react"; 
import { Alert, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Box, NativeBaseProvider, Avatar } from "native-base";
import { Button, Text, List } from "react-native-paper";

import firebase from '../../firebase';
import CarContext from "../../context/car/carContext";

const ResumenVehicle = ({ route }) => {
    const navigation = useNavigation();
    const { car, eliminarProducto } = useContext(CarContext);
        // Obtener el vehículo seleccionado de las props
        const { vehicle } = route.params;

        // Destructurar las propiedades del vehículo seleccionado
        const { brand, description, img, model, price, title, year, id, cantidad } = vehicle;

        const[total, guardarTotal] = useState(0);

    const eliminarArticulo = id => {
        Alert.alert(
            '¿Desea eliminar el artículo?',
            'Se va a eliminar el artículo',
            [
                {
                    text: 'Confirmar',
                    onPress: () => {
                        // Eliminar del state el artículo
                        eliminarProducto(id);
                    }
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
            ]
        );
    };

    const enviarPedido = () => {
        Alert.alert(
            'Enviar pedido',
            'Una vez enviado no se puede cambiar',
            [
                {
                    text: 'Confirmar',
                    onPress: async () => {
                        // Crear objeto con toda la información
                        const pedidoCar = {
                            tiempoEntrega: 0,
                            estado: false,
                            creado: Date.now(),
                            orden: car
                        };
                        // Enviar a Firebase
                        try {
                            const carRef = await firebase.db.collection('ordenes').add(pedidoCar);
                            console.log(carRef.id);
                            navigation.navigate('ProgressVehicle', { vehicle }); // Asegúrate de usar el nombre correcto de la ruta
                        } catch (error) {
                            console.log(error);
                        }
                    }
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
            ]
        );
    };

    const calcularTotal= () =>{
        const totalPagar = cantidad * price;
        guardarTotal (totalPagar)
      
       }
       useEffect(()=>{
        calcularTotal()
       }, [cantidad]
    )

    return (
        <NativeBaseProvider>
            <Container>
                <Box>
                    <Text>Resumen del pedido</Text>
                            <View>
                                <Avatar size='70px' source={{ uri: img }}></Avatar>
                                    <Text>{title}</Text>
                                    <Text>La cantidad es: {cantidad}</Text>
                                    <Text>El precio es: {price}</Text>
                                    <Text>El total es: {total}</Text>
                                    <Button onPress={() => eliminarArticulo(id)}>
                                        <Text>Eliminar artículo</Text>
                                    </Button>
                            </View>
                    <Button onPress={() => enviarPedido()}>
                        <Text>Enviar pedido</Text>
                    </Button>
                </Box>
            </Container>
        </NativeBaseProvider>
    );
};

export default ResumenVehicle;
