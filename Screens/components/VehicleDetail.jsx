import React,{useContext} from "react"; 
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Box, Container, HStack} from "native-base"
import {Card, Button} from "react-native-paper"

//Contexto del carro
import CarContext from "../../context/car/carContext";

const VehicleDetail = () => {
    //Llamar al contexto
    const { car } = useContext (CarContext)
    const {brand,description,img,model,price,title,year,id} = car
    const navigate = useNavigation();
    return(
        <View>
            <Text>{title}</Text>
            <Card>
                <Card.Cover source={{uri:img}}/>
                <Card.Content>
                    <Text>Marca: {brand}</Text>
                    <Text>Modelo: {model}</Text>
                    <Text>Año: {year}</Text>
                    <Text>{description}</Text>
                    <Text>Precio: {price}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={()=> navigate.navigate('Order')}>
                        <Text>Ordenar</Text>
                    </Button>
                </Card.Actions>
            </Card>
        </View>
    )
}


export default VehicleDetail