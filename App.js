import React from "react";
import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import StartUp from "./Screens/components/StartUp";
import NotificationBackground from './Screens/components/notificationModule/NotificationBackground'
import HistoryBackground from './Screens/components/serviceHistoryModule/HistoryBackground'
import ServiceBackground from './Screens/components/serviceRequestModule/ServiceBackground' 
import VehicleList from "./Screens/components/VehicleList"
import VehicleDetail from "./Screens/components/VehicleDetail"
import Order from "./Screens/components/Order"
import VehicleSearch from "./Screens/components/VehicleSearch"
import DrivingTest from "./Screens/components/DrivingTest"
import Contact from "./Screens/components/Contact"
import Price from './Screens/components/Price'

import FirebaseState from './context/firebase/firebaseState'
import CarState from './context/car/carState'   

export const App =() => {
  const Stack = createStackNavigator()
  return(
    <SafeAreaProvider>
        <FirebaseState>
          <CarState>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name='StartUp' component={StartUp}/>
                <Stack.Screen name='VehicleSearch' component={VehicleSearch}/>
                <Stack.Screen name='VehicleList' component={VehicleList}/>
                <Stack.Screen name='VehicleDetail' component={VehicleDetail}/>
                <Stack.Screen name='Order' component={Order}/>
                <Stack.Screen name='Price' component={Price}/>
                <Stack.Screen name='NotificationBackground' component={NotificationBackground}/>
                <Stack.Screen name='HistoryBackground' component={HistoryBackground}/>
                <Stack.Screen name='ServiceBackground' component={ServiceBackground}/>
                <Stack.Screen name='DrivingTest' component={DrivingTest}/>
                <Stack.Screen name='Contact' component={Contact}/>
              </Stack.Navigator>
            </NavigationContainer>
          </CarState>
        </FirebaseState>
    </SafeAreaProvider>
  );
}

export default App