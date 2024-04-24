import React from "react";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";

import { SafeAreaProvider } from 'react-native-safe-area-context';

//import de esteban
//import DrivingTest from "./Screens/components/DrivingTest";
//import VehicleList from "./Screens/components/VehicleList";
//import VehicleSearch from "./Screens/components/VehicleSearch";
//import de luisa 
//import Price from './Screens/components/Price';
//import StartUp from "./Screens/components/StartUp.jsx";
//import Contact from "./Screens/components/Contact";
//import de andres
//import HistoryBackground from './Screens/components/serviceHistoryModule/HistoryBackground'
import NotificationBackground from './Screens/components/notificationModule/NotificationBackground'
//import ServiceBackground from './Screens/components/serviceRequestModule/ServiceBackground'        

export const App =() => {
  return(
    
    //<DrivingTest/>
    //<VehicleSearch/>
    //<VehicleList/>
    

   //luisa
   //<StartUp />
   //<Price/>
   //<Contact />
   //andres
   <SafeAreaProvider>
    <NotificationBackground/>
   </SafeAreaProvider>
   //<HistoryBackground/>
   // <NotificationBackground/>
   //<ServiceBackground/>
  );
}

export default App