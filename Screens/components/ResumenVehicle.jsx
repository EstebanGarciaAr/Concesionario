import React,{useContext, useEffect, Fragment, useState} from "react"; 
import { Alert, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Box, FormControl, HStack, NativeBaseProvider, Input, Avatar } from "native-base";
import {Button, Text, TextInput, Card, List} from "react-native-paper";

import CarContext from "../../context/car/carContext";
import FirebaseContext from "../../context/firebase/firebaseContext";
import firebase from '../firebase';

const ResumenVehicle = () => {
    //contexto
    const {car, total, mostrarResumen, eliminarProducto} = useContext(CarContext);
    const navigation = useNavigation();

    useEffect(()=>{
        calcularTotal()
    }, [car])

    const calcularTotal = () =>{
        let nuevoTotal=0;
        nuevoTotal = car.reduce((nuevoTotal, articulo) =>nuevoTotal + articulo.total, 0)
        mostrarResumen(nuevoTotal);
    }

    const eliminarArticulo = id =>{
        Alert.alert(
            '¿Desea eliminar el articulo?',
            'Se va a eliminar el articulo',
            [
                {
                    text:'Confirmar',
                    onPress:()=>{
                        //Eliminar del state el articulo
                        eliminarProducto(id)
                    }
                },
                {
                    text:'Cancelar',
                    style: 'cancel'
                }
            ]
        )
    }

    const enviarPedido = () =>{
        Alert.alert(
            'Enviar pedido',
            'Una vez enviado no se puede cambiar',
            [
                {
                    text:'Confirmar',
                    onPress: async ()=>{
                        //crear objeto con toda la informacion
                        const pedidoCar ={
                            tiempoEntrega: 0,
                            estado: false,
                            creado: Date.now(),
                            orden: car
                        }
                         //enviar a firebase
                        try {
                            const car = await firebase.db.collection('ordenes').add(pedidoCar)
                            console.log(car.id)
                            navigation.navigate(ProgressVehicle)
                        
                        } catch (error) {
                            console.log(error)
                        }
                    }
                },
                {
                    text:'Cancelar',
                    style: 'cancel'
                }
            ]
        )
    }


    return(
        <Container>
            <Box>
                <Text>Resumen del pedido</Text>
                {car.map((buyVehicle,i)=>{
                    const {cantidad,title,img, id, price} = buyVehicle;
                    return(
                        <View key={id + i}>
                            <Avatar size='70px' source={{uri:img}}></Avatar>
                            <List.Item>
                                <Text>{title}</Text>
                                <Text>La cantidad es: {cantidad}</Text>
                                <Text>El precio es: {price}</Text>
                                <Button onPress={()=>eliminarArticulo(id)}>
                                    <Text>Eliminar articulo</Text>
                                </Button>
                            </List.Item>
                        </View>
                    )
                })}
                <Button onPress={()=> enviarPedido()}>
                    <Text>Enviar pedido</Text>
                </Button>
            </Box>
        </Container>
    );
}

export default ResumenVehicle;