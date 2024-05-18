import { Text, TextInput, View, StyleSheet, SafeAreaView, Button, Alert, Image } from "react-native";
import React, { useState } from 'react'

const VehicleSearch = () => {

    const [showFilters, setFilters] = useState(false);

    const [search, setSearch] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [error, setError] = useState('');

    const handleValidation = () => {
        let errors = '';

        if (!/^[a-zA-Z]*$/.test(search.trim())) {
            errors += 'La busqueda debe estar en el formato correcto, solo acepta letras.\n';
        }
        if (!/^[a-zA-Z]*$/.test(brand.trim())) {
            errors += 'La marca debe estar en el formato correcto, solo acepta letras.\n';
        }
        if (!/^[a-zA-Z]*$/.test(model.trim())) {
            errors += 'El modelo debe estar en el formato correcto, solo acepta letras.\n';
        }
        if (!/^(\d{4})\/([0-9])$/.test(year.trim())) {
            errors += 'El campo de año debe tener 4 dígitos.\n';
        }


        setError(errors);
        if (errors) {
            Alert.alert('Errores', errors);
        } else {
            // Esta es la lógica si la validación es exitosa,para guardarlo en la base de datos
        }
    };


    return (
        <View style={styles.container}>
            <SafeAreaView />
            <View style={styles.header}>
                <Image style={styles.image} source={require('./css/logo blanco.png')} />
                <Text style={styles.title}>Drive Market</Text>
            </View>
            <Text style={styles.title}>Buscar Vehículos</Text>
            <View style={styles.containerInput}>
                <TextInput style={styles.input} placeholder="Ingresa tu busqueda" maxLength={20} value={search} onChangeText={setSearch} />
            </View>
            <View>
                <Button title="Filtro Avanzado" onPress={() => setFilters(!showFilters)} />
                {showFilters && (
                    <>
                        <View style={[styles.containerInput, styles.containerFilter]}>
                            <TextInput style={styles.input} placeholder="Marca" value={brand} onChangeText={setBrand} />
                        </View>
                        <View style={[styles.containerInput, styles.containerFilter]}>
                            <TextInput style={styles.input} placeholder="Modelo" value={model} onChangeText={setModel} />
                        </View>
                        <View style={[styles.containerInput, styles.containerFilter]}>
                            <TextInput style={styles.input} placeholder="Año" value={year} onChangeText={setYear} keyboardType="numeric" />
                        </View>
                        <View style={[styles.containerInput, styles.containerFilter]}>
                            <TextInput style={styles.input} placeholder="Precio" keyboardType="numeric" />
                        </View>
                    </>
                )}
            </View>
            <View style={styles.button}>
                <Button title="Buscar" onPress={handleValidation} />
            </View>
            {error ? <Text style={styles.error}>{error}</Text> : null}
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
        backgroundColor: "rgb(70, 130, 180)",
        justifyContent: 'flex-start',
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
    title: {
        fontSize: 26,
        color: "white",
        textAlign: "center",
        marginTop: 20
    },
    input: {
        fontSize: 18,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#6495ED",
        fontSize: 18,
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