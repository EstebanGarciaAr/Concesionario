import React, { useContext } from "react"; 
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Box, Container, HStack, NativeBaseProvider, Image} from "native-base";
import { Card, Button } from "react-native-paper";

//Contexto del carro
import CarContext from "../../context/car/carContext";

const VehicleDetail = ({ route }) => {
    const navigation = useNavigation();
    const { car } = useContext(CarContext);

    // Obtener el vehículo seleccionado de las props
    const { vehicle } = route.params;

    // Destructurar las propiedades del vehículo seleccionado
    const { brand, description, img, model, price, title, year, id } = vehicle;
    

    return (
        <NativeBaseProvider>
            <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                    <Image style={styles.imageLogo} source={require('./css/logo blanco.png')} />
                    <Text style={styles.titleLogo}>Drive Market</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Card>
                        <Card.Cover source={{ uri: img }} />
                        <Card.Content>
                            <Text>Marca: {brand}</Text>
                            <Text>Modelo: {model}</Text>
                            <Text>Año: {year}</Text>
                            <Text>{description}</Text>
                            <Text>Precio: {price}</Text>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={() => navigation.navigate('Order')}>
                                <Text>Ordenar</Text>
                            </Button>
                        </Card.Actions>
                    </Card>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "rgb(70, 130, 180)",
        paddingTop: 50,
        paddingHorizontal: 20,
        borderWidth: 10,
        borderColor: 'white'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%', // Ajustar al ancho completo
    },
    //Logo
    titleLogo: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginLeft: 10
    },
    imageLogo: {
        height: 50,
        width: 50,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white'
    }
});

export default VehicleDetail;
