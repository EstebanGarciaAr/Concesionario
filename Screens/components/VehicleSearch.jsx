import { Text, TextInput, View, StyleSheet, SafeAreaView, Button, Alert, Image } from "react-native";
import React, { useState } from 'react'

const VehicleSearch = () => {
    const [showFilters, setFilters] = useState(false);
    const [search, setSearch] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');

    const handleValidation = () => {
        let errors = '';

        if (showFilters) {
            if (brand.trim().length > 0 && !/^[a-zA-Z]*$/.test(brand.trim())) {
                errors += 'La marca solo debe contener letras.\n';
            }
            if (model.trim().length > 0 && !/^[a-zA-Z]*$/.test(model.trim())) {
                errors += 'El modelo solo debe contener letras.\n';
            }
            if (year.trim().length !== 4 || !/^\d+$/.test(year.trim())) {
                errors += 'El campo de año debe contener exactamente 4 números.\n';
            }
            if (price.trim().length < 6 || !/^\d+$/.test(price.trim())) {
                errors += 'El precio debe ser un número entero de al menos 6 dígitos.\n';
            }
        }

        setError(errors);
        if (errors) {
            Alert.alert('Errores', errors);
        } else {
            // Lógica si la validación es exitosa
            clearFields();
        }
    };

    const clearFields = () => {
        setSearch('');
        setBrand('');
        setModel('');
        setYear('');
        setPrice('');
    };

    const handleSearchChange = (text) => {
        setSearch(text.replace(/[^a-zA-Z]/g, '').substring(0, 12));
    };
    const handleBrandChange = (text) => {
        setBrand(text.replace(/[^a-zA-Z]/g, '').substring(0, 12));
    };
    const handleModelChange = (text) => {
        setModel(text.replace(/[^a-zA-Z]/g, '').substring(0, 12));
    };
    const handleYearChange = (text) => {
        setYear(text.replace(/[^0-9]/g, '').substring(0, 4));
    };
    const handlePriceChange = (text) => {
        setPrice(text.replace(/[^0-9]/g, ''));
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
                <TextInput style={styles.input} placeholder="Ingresa tu búsqueda" maxLength={12} value={search} onChangeText={handleSearchChange} />
            </View>
            <View>
                <Button title="Filtro Avanzado" onPress={() => setFilters(!showFilters)} />
                {showFilters && (
                    <>
                        <View style={[styles.containerInput, styles.containerFilter]}>
                            <TextInput style={styles.input} placeholder="Marca" maxLength={12} value={brand} onChangeText={handleBrandChange} />
                        </View>
                        <View style={[styles.containerInput, styles.containerFilter]}>
                            <TextInput style={styles.input} placeholder="Modelo" maxLength={12} value={model} onChangeText={handleModelChange} />
                        </View>
                        <View style={[styles.containerInput, styles.containerFilter]}>
                            <TextInput style={styles.input} placeholder="Año" maxLength={4} value={year} onChangeText={handleYearChange} keyboardType="numeric" />
                        </View>
                        <View style={[styles.containerInput, styles.containerFilter]}>
                            <TextInput style={styles.input} placeholder="Precio" value={price} onChangeText={handlePriceChange} keyboardType="numeric" />
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
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    },
})

export default VehicleSearch