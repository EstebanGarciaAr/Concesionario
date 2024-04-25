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
    const [error, setError] = useState('');


    const handleRequestQuote = () => {

        Alert.alert('Solicitud de Cotización Enviada', 'Pronto nos pondremos en contacto contigo. ¡Gracias!');
    };

    const handleValidation = () => {
        let errors = '';

        if (!name.trim()) {
            errors += 'El campo Nombre es obligatorio.\n';
        }
        else if (!/^[a-zA-Z]*$/.test(name.trim())) {
            errors += 'El nombre debe estar en el formato correcto, solo acepta letras.\n';
        }
        if (!email.trim()) {
            errors += 'El campo email es obligatorio.\n';
        }
        if (!phone.trim()) {
            errors += 'El campo Teléfono es obligatorio.\n';
        } else if (!/^\d{3} \d{3} \d{4}$/.test(phone.trim())) {
            errors += 'El teléfono debe estar en el formato correcto (### ### ####), solo acepta números.\n';
        }
        if (!cedula.trim()) {
            errors += 'El campo Cédula es obligatorio.\n';
        } else if (!/^\d{11}$/.test(cedula.trim())) {
            errors += 'El número de identificación debe tener 11 dígitos.\n';
        }
        if (!direccion.trim()) {
            errors += 'El campo Dirección es obligatorio.\n';
        }
        if (!ciudad.trim()) {
            errors += 'El campo Ciudad es obligatorio.\n';
        }
        else if (!/^[a-zA-Z]*$/.test(ciudad.trim())) {
            errors += 'La ciudad debe estar en el formato correcto, solo acepta letras.\n';
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
            <Text style={styles.title}>Drive Market</Text>
            <Text style={styles.text}>Solicitud de Cotización</Text>
            <Text style={styles.text1}>¡Diligencie en su totalidad el formulario para asi poder contactarte y brindarte toda la información!</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre"
                onChangeText={setName}
                value={name}
            />


            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Número de Teléfono"
                onChangeText={setPhone}
                value={phone}
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.input}
                placeholder="Ingrese su cédula"
                onChangeText={setCedula}
                value={cedula}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Ingrese su dirección"
                onChangeText={setDireccion}
                value={direccion}
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrese su ciudad"
                onChangeText={setCiudad}
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
                onPress={() => {
                    handleRequestQuote();
                    handleValidation(); 
                }}
            />

                {error ? <Text style={styles.error}>{error}</Text> : null}

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
