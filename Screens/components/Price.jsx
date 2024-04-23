import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, Alert, TextInput, } from "react-native";

const Price = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cedula, setCedula] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [comentario, setComentario] = useState('');


    const handleRequestQuote = () => {

        Alert.alert('Solicitud de Cotización Enviada', 'Pronto nos pondremos en contacto contigo. ¡Gracias!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Drive Market</Text>
            <Text style={styles.text}>Solicitud de Cotización</Text>
            <Text style={styles.text1}>¡Diligencie en su totalidad el formulario para asi poder contactarte y brindarte toda la información!</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre"
                onChangeText={(text) => setName(text)}
                value={name}
            />


            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                onChangeText={(text) => setEmail(text)}
                value={email}
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Número de Teléfono"
                onChangeText={(text) => setPhone(text)}
                value={phone}
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.input}
                placeholder="Ingrese su cédula"
                onChangeText={(text) => setCedula(text)}
                value={cedula}
            />
            <TextInput
                style={styles.input}
                placeholder="Ingrese su dirección"
                onChangeText={(text) => setDireccion(text)}
                value={direccion}
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrese su ciudad"
                onChangeText={(text) => setCiudad(text)}
                value={ciudad}
            />

            <Text style={styles.comment}>Comentario</Text>
            <TextInput
                style={[styles.input, styles.multilineInput]}
                placeholder="..."
                onChangeText={(text) => setComentario(text)}
                value={comentario}
                multiline
                numberOfLines={10}
            />


            <Button
                title="Solicitar Cotización"
                color="#bcbfc2"
                onPress={handleRequestQuote}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(70, 130, 180)",
        paddingTop: 50,
        alignItems: 'center',
        paddingHorizontal: 20,
        borderWidth: 10,
        borderColor: 'white',
    },
    title: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20

    },
    text1: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,

    },
    text: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    comment: {
        color: 'white',
        textAlign: 'right'

    },
    image: {
        height: 100,
        width: 100,
        marginBottom: 20,
    },
    input: {
        height: 40,
        backgroundColor: "white",
        borderColor: "white",
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        width: "100%",
    },
    label: {
        color: 'black',
        fontSize: 16,
        marginBottom: 5,
    },
    button: {
        marginBottom: 100,
        marginTop: 20,
    },
    image: {
        height: 10,
        width: 10,
        marginBottom: 2,
    },
});

export default Price;
