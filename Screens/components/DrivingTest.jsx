import React from "react";
import { TextInput, Text, View, StyleSheet, SafeAreaView, Button } from "react-native";

const DrivingTest = () => {
    
    return (
        <View style={styles.container1}>
            <View style={styles.container2}>
                <Text style={styles.title}>AGENDA TU PRUEBA DE MANEJO</Text>
                
                <SafeAreaView/>
                <Text style={[styles.title,styles.data]}>Nombre*</Text>
                <TextInput style={styles.placeholder} placeholder="Nombre"/>
                <Text style={[styles.title,styles.data]}>Apellido*</Text>
                <TextInput style={styles.placeholder} placeholder="Apellido"/>
                <Text style={[styles.title,styles.data]}>Telefono*</Text>
                <TextInput style={styles.placeholder} placeholder="### ### ####"/>
                <Text style={[styles.title,styles.data]}>Numero Identificación*</Text>
                <TextInput style={styles.placeholder} placeholder="0000000000"/>
                <Text style={[styles.title,styles.data]}>Fecha para tu Prueba de Manejo*</Text>
                <TextInput style={styles.placeholder} placeholder="DD/MM/AAAA"/>
                <Text style={[styles.title,styles.data]}>Hora para tu Prueba de Manejo*</Text>
                <TextInput style={styles.placeholder} placeholder="HH/MM: AM"/>
                <Text style={[styles.title,styles.data]}>¿Qué Vehículo Quieres Probar?</Text>
                <TextInput style={styles.placeholder} placeholder="Por favor selecciona el vehículo"/>
                <View style={styles.button}>
                    <Button  title="Agendar Prueba de Manejo"/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container2:{
        justifyContent: 'flex-start',
        backgroundColor: '#bbbec5',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 15
    },
    container1:{
        justifyContent: 'flex-start',
        backgroundColor: '#4682B4'
    },
    title:{
        fontSize: 26,
        color: "black",
        textAlign: 'center',
        marginBottom: 4
    },
    data:{
        fontSize: 22,
        textAlign: 'left',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5
    },
    placeholder: {
        fontSize: 18,
        textAlign: 'left',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: "white"
    },
    button: {
        fontSize: 18,
        backgroundColor: "black",
        width: '50%',
        padding: 10,
        marginLeft: 90,
        marginTop: 10,
        marginBottom: 10
    }
})

export default DrivingTest