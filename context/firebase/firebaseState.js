import React, {useReducer} from 'react'
import FirebaseContext from './firebaseContext'
import FirebaseReducer from './firebaseReducer'
import firebase from '../../firebase'
import {GET_SUCCESSFUL_VEHICLES} from '../../types'
import _ from 'lodash'

const FirebaseState = props => {
    const initialState = {
        menu:[]
    }

    const[ state, dispatch] = useReducer(FirebaseReducer, initialState)
    const vehiclesGet = ()=>{
        //consulta a firebase
        firebase.db
            .collection('vehiculos')
            .onSnapshot(handleSnapshot)

        function handleSnapshot(snapshot){
            let vehicle = snapshot.docs.map(doc=>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
            });

            //ordenar información
            vehicle = _.sortBy(vehicle, 'categoryScrollView') 
            dispatch({
                type: GET_SUCCESSFUL_VEHICLES,
                payload: vehicle
            });
        }
    }
    return(
        <FirebaseContext.Provider
            value={{
                menu: state.menu
                ,firebase,
                vehiclesGet
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;

