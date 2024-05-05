import React,{useContext, useEffect, Fragment} from "react"; 
import { Image, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FirebaseContext from "../../context/firebase/firebaseContext";
import CarContext from "../../context/car/carContext";
import {NativeBaseProvider, View, Text, ScrollView, Avatar} from 'native-base'
import {List} from 'react-native-paper'



const VehicleList = () => {
    const navigation = useNavigation();
    const{menu, vehiclesGet} = useContext(FirebaseContext)
    const{selectVehicle} = useContext(CarContext)
    useEffect(()=>{
        vehiclesGet()
    }, [])

    return(
        <NativeBaseProvider>
            <ScrollView>
                <View>
                    {menu.map((vehicle,i)=>{
                        const {brand,description,img,model,price,title,year,id} = vehicle
                        return(
                            <Fragment>
                                <Avatar size="200px" source={{uri:img}}></Avatar>
                                <List.Item title = {title} description = {description} onPress={()=> navigation.navigate('VehicleDetail')}>
                                    <Text numberOfLines={1}>{title}</Text>
                                    <Text>{price}</Text>
                                </List.Item>
                            </Fragment>
                        )
                    })}
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
};

export default VehicleList