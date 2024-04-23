import React from "react"; 
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";


const VehicleList = () => {
    const vehicleItem = (list) => (
        <View style={styles.container} key={list.id}>
            <Text style={styles.title}>{list.title}</Text>
            <Image source={{ uri: list.imageUrl }} style={styles.img}/>
            <View style={styles.container}>
                <Text style={[styles.title,styles.description]}>{list.description}</Text>
                <Text style={[styles.title,styles.description,styles.data]}>{list.brand}</Text>
                <Text style={[styles.title,styles.description,styles.data]}>{list.model}</Text>
                <Text style={[styles.title,styles.description,styles.data]}>{list.year}</Text>
                <Text style={[styles.title,styles.description,styles.data]}>${list.price}</Text>
            </View>
        </View>
    );
    return (
        <ScrollView>
          {Vehicle.map(vehicleItem)}
        </ScrollView>
    );
};


const Vehicle = [
    {
        id: 1,
        title: 'Mini COOPER 2019',
        imageUrl: 'https://www.elcarrocolombiano.com/wp-content/uploads/2018/07/20180719-MINI-COOPER-2019-COLOMBIA-02.jpg',
        description: '¿Listo para sentir la emoción en tus manos? Este hermoso Mini COOPER 2019 te hará vibrar. Potencia, elegancia y adrenalina en un solo auto.',
        brand: 'Mini',
        model: 'COUPE',
        year: '2019',
        price: 95000000,
    },
    {
        id: 2,
        title: 'Renault KOLEOS 2017',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/73/2017_Renault_Koleos_%28HZG%29_Zen_wagon_%282018-08-27%29_01.jpg',
        description: 'Es el carro perfecto para disfrutar de la ciudad. Es cómodo, seguro y tiene un gran espacio interior.',
        brand: 'Renault',
        model: 'WAGON',
        year: '2017',
        price: 66700000,
    },
    {
        id: 3,
        title: 'Toyota RAV4 2021',
        imageUrl: 'https://cdn.motor1.com/images/mgl/2Pn7g/s3/lanzamiento-toyota-rav4-2021.jpg',
        description: 'Esta RAV4 Hybrid es la opción perfecta para ti. Es espaciosa, cómoda y económica. Además, está en perfecto estado.',
        brand: 'Toyota',
        model: 'WAGON',
        year: '2021',
        price: 185500000,
    },
];

const styles = StyleSheet.create({
    container:{
        justifyContent: 'flex-start',
        backgroundColor: '#4682B4'
    },
    img:{
        width: 300,
        height: 300,
        marginTop: 10,
        marginLeft: 50
        
    },
    title:{
        fontSize: 35,
        color: "black",
        textAlign: 'center'
    },
    description:{
        fontSize: 15,
        marginLeft: 50,
        marginRight: 61,
        marginTop: 5
    },
    data: {
        backgroundColor: "white",
        fontSize: 20,
    }
})

export default VehicleList