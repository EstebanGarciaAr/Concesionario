import React,{useContext, useEffect, Fragment, useState} from "react"; 
import { Alert, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Box, FormControl, HStack, NativeBaseProvider, Input } from "native-base";
import {Button, Text, TextInput, Card} from "react-native-paper";

import CarContext from "../../context/car/carContext";

const Order = ({ route }) => {
    const navigation = useNavigation();
    const { car } = useContext(CarContext);

    // Obtener el vehículo seleccionado de las props
    const { vehicle } = route.params;

    // Destructurar las propiedades del vehículo seleccionado
    const { brand, description, img, model, price, title, year, id } = vehicle;

   const[cantidad, guardarCantidad] = useState(1);
   const[total, guardarTotal] = useState(0);

   //traer contextos
   const {selectVehicle} = useContext(CarContext)

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
    const totalPagar = cantidad * price;
    guardarTotal (totalPagar)
  
   }

   const confirmarCompra =()=>{
    Alert.alert(
        '¿Se quiere confirmar el pedido?',
        'Se enviara la compra',
        [
            {
                text:'Confirmar',
                onPress:()=>{
                    const car = {
                        ...car,
                        cantidad, 
                        total
                    }
                    selectVehicle(car)
                    navigation.navigate('ResumenVehicle', { vehicle })
                }
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
                                        onPress={confirmarCompra}
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