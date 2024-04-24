import React,{useState} from "react";
import { TextInput, Text, View, StyleSheet, SafeAreaView, Button, Alert } from "react-native";
import {Picker} from '@react-native-picker/picker';

const DrivingTest = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [selectedVehicle, setSelectedVehicle] = useState('');
    const [error, setError] = useState('');


    const handleValidation = () => {
        let errors = '';

        if (!name.trim()) {
            errors += 'El campo Nombre es obligatorio.\n';
        }
        else if (!/^[a-zA-Z]*$/.test(name.trim())) {
            errors += 'El nombre debe estar en el formato correcto, solo acepta letras.\n';
        }
        if (!lastName.trim()) {
            errors += 'El campo Apellido es obligatorio.\n';
        }
        else if (!/^[a-zA-Z]*$/.test(lastName.trim())) {
            errors += 'El apellido debe estar en el formato correcto, solo acepta letras.\n';
        }
        if (!phone.trim()) {
            errors += 'El campo Teléfono es obligatorio.\n';
        } else if (!/^\d{3} \d{3} \d{4}$/.test(phone.trim())) {
            errors += 'El teléfono debe estar en el formato correcto (### ### ####), solo acepta números.\n';
        }
        if (!idNumber.trim()) {
            errors += 'El campo Número de identificación es obligatorio.\n';
        } else if (!/^\d{11}$/.test(idNumber.trim())) {
            errors += 'El número de identificación debe tener 11 dígitos.\n';
        }
        if (!date.trim()) {
            errors += 'El campo Fecha es obligatorio.\n';
        } else if (!/^(\d{2})\/(\d{2})\/(\d{4})$/.test(date.trim())) {
            errors += 'La fecha debe estar en el formato correcto (DD/MM/AAAA), solo acepta formato fecha.\n';
        }
        if (!time.trim()) {
            errors += 'El campo Hora es obligatorio.\n';
        } else if (!/^(\d{2}):(\d{2}) (AM|PM)$/.test(time.trim().toUpperCase())) {
            errors += 'La hora debe estar en el formato correcto (HH:MM AM/PM).\n';
        }
        if (!selectedVehicle) {
            errors += 'Debe seleccionar un vehículo.\n';
        }

        setError(errors);
        if (errors) {
            Alert.alert('Errores', errors);
        } else {
            // Esta es la lógica si la validación es exitosa,para guardarlo en la base de datos
        }
    };


    
    return (
        <View style={styles.container1}>
            <View style={styles.container2}>
                <Text style={styles.title}>AGENDA TU PRUEBA DE MANEJO</Text>
                
                <SafeAreaView/>
                <Text style={[styles.title,styles.data]}>Nombre*</Text>
                <TextInput style={styles.placeholder}  placeholder="Nombre" value={name} onChangeText={setName}  maxLength={20} keyboardType="string"/>
                <Text style={[styles.title,styles.data]}>Apellido*</Text>
                <TextInput style={styles.placeholder} placeholder="Apellido" value={lastName} onChangeText={setLastName}  maxLength={20} keyboardType="string"/>
                <Text style={[styles.title,styles.data]}>Telefono*</Text>
                <TextInput style={styles.placeholder} placeholder="### ### ####" value={phone} onChangeText={setPhone} keyboardType="phone-pad"/>
                <Text style={[styles.title,styles.data]}>Numero Identificación*</Text>
                <TextInput style={styles.placeholder} placeholder="0000000000" value={idNumber} onChangeText={setIdNumber} maxLength={11} keyboardType="numeric" />
                <Text style={[styles.title,styles.data]}>Fecha para tu Prueba de Manejo*</Text>
                <TextInput style={styles.placeholder} placeholder="DD/MM/AAAA" value={date} onChangeText={setDate}/>
                <Text style={[styles.title,styles.data]}>Hora para tu Prueba de Manejo*</Text>
                <TextInput style={styles.placeholder} placeholder="HH/MM: AM/PM" value={time} onChangeText={setTime}/>
                <Text style={[styles.title,styles.data]}>¿Qué Vehículo Quieres Probar?</Text>
                <Picker style={styles.placeholder} selectedVehicle={selectedVehicle} onValueChange={(itemValue) => setSelectedVehicle(itemValue)}>
                    <Picker.Item label="Mini Cooper" value="mini"/>
                    <Picker.Item label="Renault" value="renault"/>
                    <Picker.Item label="Toyota" value="toyota"/>
                </Picker>
                <View style={styles.button}>
                    <Button  title="Agendar Prueba de Manejo" onPress={handleValidation}/>
                </View>
                {error ? <Text style={styles.error}>{error}</Text> : null}
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
    },
    picker:{
        fontSize: 18,
        textAlign: 'left',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: "white"
    }
})

export default DrivingTest