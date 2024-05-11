import React, { useContext, useEffect, Fragment } from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FirebaseContext from "../../context/firebase/firebaseContext";
import CarContext from "../../context/car/carContext";
import { View, Text, ScrollView, Avatar, NativeBaseProvider, List, Image } from 'native-base'

const VehicleList = () => {
    const navigation = useNavigation();
    const { menu, vehiclesGet } = useContext(FirebaseContext);
    const { selectVehicle } = useContext(CarContext);

    useEffect(() => {
        vehiclesGet();
    }, []);

    const handleSelectVehicle = (vehicle) => {
        selectVehicle(vehicle);
        navigation.navigate('VehicleDetail', { vehicle });
    };

    return (
        <NativeBaseProvider>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.imageLogo} source={require('./css/logo blanco.png')} />
                    <Text style={styles.title}>Drive Market</Text>
                </View>
                <View>
                    {menu.map((vehicle, i) => {
                        const { brand, description, img, model, price, title, year, id } = vehicle;
                        return (
                            <Fragment key={id}>
                                <Avatar size="200px" source={{ uri: img }} />
                                <List.Item
                                    title={title}
                                    description={description}
                                    onPress={() => handleSelectVehicle(vehicle)}
                                    style={styles.listItem}
                                >
                                    <Text numberOfLines={1}>{title}</Text>
                                    <Text>{price}</Text>
                                </List.Item>
                            </Fragment>
                        );
                    })}
                </View>
            </ScrollView>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    container: {
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
        width: '100%', // Ajustar al ancho completo
    },
    //Logo
    title: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginLeft: 10
    },
    imageLogo: {
        height: 50,
        width: 50,
    },
    listItem: {
        borderBottomWidth: 1,
        borderColor: "gray",
        marginBottom: 10
    }
});

export default VehicleList;
