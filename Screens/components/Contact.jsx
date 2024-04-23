import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";


const Contact = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo}
                source={require('./css/logo blanco.png')} />

            <Text style={styles.title}>Drive Market</Text>
            <Text style={styles.text}>Contactanos</Text>
            <Text style={styles.info}>Estamos ubicados en Medellin Antiquia</Text>
            <Text style={styles.info}> calle 76d N88c-71</Text>
            <Text style={styles.info}>Teléfono: 300673535</Text>
            <Text style={styles.info}>Correo Electrónico: drivemarket@gmail.com</Text>
            <Image style={styles.confessionalImage}
                source={require('./css/ImagenConse.jpeg')} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(70, 130, 180)",
        paddingTop: 50,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderWidth: 15,
        borderColor: 'white',
    },
    title: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20
    },
    text: {
        color: 'white',
        fontSize: 50,
        marginBottom: 20,
    },
    info: {
        color: 'white',
        fontSize: 20,
        marginBottom: 15,
        alignItems: 'center',
    },
    // imagen de carro
    logo: {
        height: 10,
        width: 10,
        marginBottom: 2,
    },
    confessionalImage: {
        height: 300,
        width: 300,
        marginTop:20,
        marginBottom: 2,
    }
});

export default Contact;
