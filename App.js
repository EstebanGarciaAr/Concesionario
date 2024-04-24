import React from "react";
import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';

//import StartUp from "./Screens/components/StartUp";
//import NotificationBackground from './Screens/components/notificationModule/NotificationBackground'
//import HistoryBackground from './Screens/components/serviceHistoryModule/HistoryBackground'
//import ServiceBackground from './Screens/components/serviceRequestModule/ServiceBackground' 
//import VehicleList from "./Screens/components/VehicleList"
//import VehicleSearch from "./Screens/components/VehicleSearch"
import DrivingTest from "./Screens/components/DrivingTest"
//import Contact from "./Screens/components/Contact"

//import FirebaseState from './context/firebase/firebaseState'
//import CarState from './context/car/carState'



//import de luisa 
//import Price from './Screens/components/Price';



      

/*export const App =() => {
  const Stack = createStackNavigator()
  return(
    <SafeAreaProvider>
      <FirebaseState>
        <CarState>
            <NavigationContainer>
                <Stack.Screen name='VehicleList' component={VehicleList}/>
                <Stack.Screen name='StartUp' component={StartUp}/>
                <Stack.Screen name='NotificationBackground' component={NotificationBackground}/>
                <Stack.Screen name='HistoryBackground' component={HistoryBackground}/>
                <Stack.Screen name='ServiceBackground' component={ServiceBackground}/>
               
                <Stack.Screen name='VehicleSearch' component={VehicleSearch}/>
                <Stack.Screen name='DrivingTest' component={DrivingTest}/>
                <Stack.Screen name='Contact' component={Contact}/>

            </NavigationContainer>
        </CarState>
      </FirebaseState>
    </SafeAreaProvider>
  );
}
*/

export const App =() =>{
  return(
    <DrivingTest/>

  );
}

export default App