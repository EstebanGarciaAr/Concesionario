import {Text, TextInput, View, StyleSheet, SafeAreaView, Button} from "react-native";
import React, {useState} from 'react'

const VehicleSearch = () => {

    const [text, setText] = useState('');

    const handleTextChange = newT => {
        if (/^[a-zA-Z]*$/.test(newT) && newT.length <= 20) {
            setText(newT);
        }
    }


    return(
        <View style={styles.container}>
            <SafeAreaView/>
            <Text style={styles.title}>Buscar Vehículos</Text>
            <View style={styles.containerInput}>
                <TextInput style={styles.input} onChangeText={handleTextChange} placeholder="Ingresa tu busqueda" maxLength={20}/>
            </View>
            <View style={styles.button}>
                    <Button  title="Filtro Avanzado"/>
            </View>
            <View style={[styles.containerInput,styles.containerFilter]}>
                <TextInput style={styles.input} placeholder="Marca"/>
            </View>
            <View style={[styles.containerInput,styles.containerFilter]}>
                <TextInput style={styles.input} placeholder="Modelo"/>
            </View>
            <View style={[styles.containerInput,styles.containerFilter]}>
                <TextInput style={styles.input} placeholder="Año"/>
            </View>
            <View style={[styles.containerInput,styles.containerFilter]}>
                <TextInput style={styles.input} placeholder="Precio"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerInput: {
        borderColor: "black",
        borderWidth: 2,
        padddingHorizontal: 36,
        paddingVertical: 3,
        borderRaidus: 2,
        marginHorizontal: 16,
        backgroundColor: "white",
        marginBottom: 15,
        marginTop: 15
    },
    container: {
        backgroundColor: '#4682B4',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 26,
        color: "black",
        textAlign: "center",
        marginTop: 20
    },
    input: {
        fontSize: 18,
        textAlign: "center",
    },
    button: {
        fontSize: 18,
        backgroundColor: "black",
        width: '50%',
        padding: 10,
        marginLeft: 105,
        marginTop: 10,
        marginBottom: 10
    },
    containerFilter: {
        marginHorizontal: 100,
    }
})

export default VehicleSearch