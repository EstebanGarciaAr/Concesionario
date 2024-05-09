import React, { useState } from "react";
import { StyleSheet, Text, Button, View, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

function StartUp({ navigation }) {
    const [searchQuery, setSearchQuery] = useState(''); //hook usestate para definir el estado local searchquery que almacena las consultas, y el set actualiza el estado  
    const [filteredData, setFilteredData] = useState([]);

    const data = [
        { id: 1, name: "buscar 1" },
        { id: 2, name: "buscar 2" },
    ];

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
        setFilteredData(filtered);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={require('./css/logo blanco.png')} />
                <Text style={styles.title}>Drive Market</Text>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Buscar..."
                onChangeText={handleSearch}
                value={searchQuery}
            />

            <View style={styles.centeredContainer}>
                <Text style={styles.textVehiculo}> ¡Tenemos una amplia selección para ti!</Text>
                <Image style={styles.vehiculosDisponibles} source={require('./css/imagvehidispo.png')} />
            </View>

            <Button
                title="Vehiculos"
                onPress={() => navigation.navigate('VehicleList')}
                color="#6495ED"
                style={styles.button}
            />

            <View style={styles.textContainer}>
                <Text style={styles.textTituloContacto}>¡Descubre tu próximo vehículo con nosotros!</Text>
                <Text style={styles.textContacto}>¿Estás buscando el automóvil perfecto? No busques más.
                    En nuestra empresa, estamos comprometidos con brindarte la mejor experiencia al
                    comprar un automóvil.</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonWrapper}>
                        <Button
                            title="Contacto"
                            onPress={() => navigation.navigate('Contact')}
                            color="#6495ED"
                            style={styles.button}
                        />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <Button
                            title="Buscar"
                            onPress={() => navigation.navigate('VehicleSearch')}
                            color="#6495ED"
                            style={styles.button}
                        />
                    </View>
                </View>

            </View>

            <View style={styles.centeredContainer}>
                <Text style={styles.textCotizar}> ¿Quieres saber cuánto cuesta tu próximo automóvil?</Text>
                <Image style={styles.imaCotizar} source={require('./css/cotizar.jpg')} />
                <Button
                    title="Cotizacion"
                    onPress={() => navigation.navigate('Price')}
                    color="#6495ED"
                />

            </View>
            <View style={styles.centeredContainer}>
                <Text style={styles.textTituloManejo}> Descubre Tu Futuro Auto</Text>
                <Text style={styles.textManejo}>¡Maneja la Emoción!</Text>
                <Image style={styles.imaCotizar} source={require('./css/manejo.png')} />
                <Button
                    title="Manejo"
                    onPress={() => navigation.navigate('DrivingTest')}
                    color="#6495ED"
                />

            </View>
            <View style={styles.centeredContainer}>
                <Text style={styles.textTituloTaller}> Servicio de taller</Text>
                <Image style={styles.imaCotizar} source={require('./css/taller.jpg')} />
                <Button
                    title="Servicio"
                    onPress={() => navigation.navigate('ServiceBackground')}
                    color="#6495ED"
                />
                <Text style={styles.textHistorial}> Historial de servicios de taller</Text>
                <Image style={styles.imaHistorial} source={require('./css/historial.png')} />
                <Button
                    title="Historial"
                    onPress={() => navigation.navigate('HistoryBackground')}
                    color="#6495ED"
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textBuzon}>Mira tus mensajes:</Text>
                <Button
                    title="Buzon"
                    onPress={() => navigation.navigate('NotificationBackground')}
                    color="#6495ED"
                />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        padding: 10,
        marginLeft: 10,
    },
    container: {
        flexGrow: 1,
        backgroundColor: "rgb(70, 130, 180)",
        paddingTop: 50,
        paddingHorizontal: 20,
        borderWidth: 10,
        borderColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    //Logo
    title: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginLeft: 10,
    },
    image: {
        height: 50,
        width: 50,
    },
    //barra de busqueda
    input: {
        height: 40,
        borderColor: "white",
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        width: "100%",
    },
    //seccion de vehiculos disponibles
    vehiculosDisponibles: {
        height: 150,
        width: 150,
        marginTop: 20,
    },
    textVehiculo: {
        marginTop: 20,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginLeft: 10,
    },
    //container para organizar las imagenes y los botones
    centeredContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    //container para organizar los textos de contacto
    textContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    //seccion contactar
    textTituloContacto: {
        marginTop: 20,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    textContacto: {
        marginTop: 5,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    buttonContainerContacto: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    buttonWrapper: {
        flex: 1, //botones con el mismo tamaño
        marginHorizontal: 10, //espacio entre los botones
    },
    //seccion cotizar
    textCotizar: {
        marginTop: 5,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginLeft: 15,
        marginBottom: 1,
    },
    imaCotizar: {
        height: 150,
        width: 350,
        marginTop: 10,
    },

    //seccion prueba de manejo
    textTituloManejo: {
        marginTop: 5,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginLeft: 15,
        marginBottom: 1,
    },
    textManejo: {
        marginTop: 5,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginLeft: 5,
    },
    //seccion taller
    textTituloTaller: {
        marginTop: 5,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginLeft: 15,
        marginBottom: 1,
    },
    textTaller: {
        marginTop: 5,
        color: 'white',
        fontSize: 15,
        marginLeft: 5,
    },
    //seccion historial
    textHistorial: {
        marginTop: 5,
        color: 'white',
        fontSize: 15,
        marginLeft: 5,
    },
    imaHistorial: {
        height: 150,
        width: 365,
        marginTop: 10,
        marginLeft: 5,
    },
    //seccion Buzon
    textBuzon: {
        marginTop: 5,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginLeft: 5,
    },

});

export default StartUp;
