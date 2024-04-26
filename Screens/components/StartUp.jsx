import React, { useState } from "react";
import { StyleSheet, Text, Button, View, Image, TouchableOpacity, Alert, TextInput, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Buttom } from 'native-base'

function StartUp({ navigation }) {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // lista de datos
    const data = [
        { id: 1, name: "buscar 1" },
        { id: 2, name: "buscar 2" },
    ];

    // filtra los datos de búsqueda
    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
        setFilteredData(filtered);
    };

    return (

        <View style={styles.container}>
            <Image style={styles.image}
                source={require('./css/logo blanco.png')} />

            <Text style={styles.title}>Drive Market</Text>

            <TextInput
                style={styles.input}
                placeholder="Buscar..."
                onChangeText={handleSearch}
                value={searchQuery}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Cotizacion"
                    onPress={() => navigation.navigate('Price')}
                    color="#6495ED"
                />
                <Button
                    title="Contacto"
                    onPress={() => navigation.navigate('Contact')}
                    color="#6495ED"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Vehiculos"
                    onPress={() => navigation.navigate('VehicleList')}
                    color="#6495ED"
                />
                <Button
                    title="Buscar"
                    onPress={() => navigation.navigate('VehicleSearch')}
                    color="#6495ED"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Manejo"
                    onPress={() => navigation.navigate('DrivingTest')}
                    color="#6495ED"
                />
                <Button
                    title="Buzon"
                    onPress={() => navigation.navigate('NotificationBackground')}
                    color="#6495ED"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Historial"
                    onPress={() => navigation.navigate('HistoryBackground')}
                    color="#6495ED"
                />
                <Button
                    title="Servicio"
                    onPress={() => navigation.navigate('ServiceBackground')}
                    color="#6495ED"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: "rgb(70, 130, 180)",
        paddingTop: 50,

        paddingHorizontal: 20,
        borderWidth: 10,
        borderColor: 'white',
    },

    title: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20

    },
    //texto de "categorias:"
    text1: {
        color: 'white',
        fontSize: 25,
        textAlign: 'left',
        marginBottom: 190,
    },
    //texto de "servicio de taller"
    text2: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 13,
    },
    image: {
        height: 10,
        width: 10,
        marginBottom: 2,
    },
    // imagen de carro
    imagecar: {
        height: 300,
        width: 390,
        marginBottom: 13,
        alignSelf: 'center',
    },
    // estilo para la barra de busqueda
    input: {
        height: 40,
        borderColor: "white",
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        width: "100%",
    },
    // estilo para la busqueda 
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        marginBottom: 10,
        borderRadius: 5,
        width: "100%",
    },

    button: {
        backgroundColor: '#bcbfc2',
        width: 200,
        height: 50,
        alignItems: 'center',
        margintop: 200,
        marginBottom: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
    },
});

export default StartUp;
