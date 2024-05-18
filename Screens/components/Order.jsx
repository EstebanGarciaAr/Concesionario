import React,{useContext, useEffect, Fragment, useState} from "react"; 
import { Alert, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Box, FormControl, HStack, NativeBaseProvider, Input } from "native-base";
import {Button, Text, TextInput, Card} from "react-native-paper";

import CarContext from "../../context/car/carContext";
import FirebaseContext from "../../context/firebase/firebaseContext";

const Order = ( ) => {
   const[cantidad, guardarCantidad] = useState(1);
   const[total, guardarTotal] = useState(0);

   //traer contextos
   const {car, selectVehicle} = useContext(CarContext)
   const {price, description} = car

   const incrementar = () =>{
    const nuevaCantidad = parseInt(cantidad)+1
    guardarCantidad(nuevaCantidad)
   }

   const decrementar = () =>{
    if(cantidad>1){
        const nuevaCantidad = parseInt(cantidad)-1
        guardarCantidad(nuevaCantidad)
    }
   }

   const calcularTotal= () =>{
    //const totalPagar = cantidad * price;
    //guardarTotal (totalPagar)
    console.log(price)
    console.log(description)
  
   }

   const confirmarCompra =()=>{
    Alert.alert(
        '¿Se quiere confirmar el pedido?',
        'Se enviara la compra',
        [
            {
                text:'Confirmar',
            },
            {
                text:'Cancelar'
            }
        ]
    )
   }

   useEffect(()=>{
    calcularTotal()
   }, [cantidad]
)
   
    return(
        <NativeBaseProvider>
            <Container>
                <Box>
                    <FormControl>
                        <HStack space={3}>
                            <Button onPress={()=> decrementar()}>-</Button>
                            <TextInput
                                value ={cantidad.toString()}
                                onChange={cantidad =>guardarCantidad(cantidad)}
                            />
                            <Button onPress={()=> incrementar()}>+</Button>

                        </HStack>
                    </FormControl>
                    <Text>Total a pagar: $ {total}</Text>
                    <Text>{price}</Text>
                    <Box>
                        <HStack safeAreaBottom>
                            <Card>
                                <Card.Actions>
                                    <Button
                                        onPress={()=>confirmarCompra}
                                    >
                                        <Text>Ordenar</Text>
                                    </Button>
                                </Card.Actions>
                            </Card>
                        </HStack>
                    </Box>
                </Box>
            </Container>
        </NativeBaseProvider>
    );
}

export default Order