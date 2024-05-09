import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const Contact = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.header}>
                <Image style={styles.image}
                    source={require('./css/logo blanco.png')} />
                <Text style={styles.title}>Drive Market</Text>
            </View>

            <Text style={styles.text}>Contactanos</Text>
            <Text style={styles.info}>Estamos ubicados en Medellin Antioquia</Text>
            <Text style={styles.info}>Calle 76d N88c-71</Text>
            <Text style={styles.info}>Teléfono: 300673535</Text>
            <Text style={styles.info}>Correo Electrónico: drivemarket@gmail.com</Text>
            <View style={styles.conseImageContainer}>
                <Image style={styles.conseImage} source={require('./css/ImagenConse.jpeg')} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    scrollViewContainer: {
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
    },
    title: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginLeft: 10,
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
    image: {
        height: 50,
        width: 50,
    },
    conseImageContainer: {
        alignItems: 'center',
    },
    conseImage: {
        height: 240,
        width: 280,
        marginTop: 20,
        marginBottom: 2,
    }
});

export default Contact;
