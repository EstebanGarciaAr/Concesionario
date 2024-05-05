import React, {useReducer} from 'react'
import CarContext from './carContext'
import CarReducer from './carReducer'
import { SELECT_VEHICLES } from '../../types'

const CarState = props => {
    const initialState = {
        car:[],
        buyVehicle: null
    }

    const[ state, dispatch] = useReducer(CarReducer, initialState)
    //seleccionar y obtener el vehiculo
    const selectVehicle = buyVehicle =>{
        dispatch({
            type: SELECT_VEHICLES,
            payload: buyVehicle
        })
    }
    return(
        <CarContext.Provider
            value={{
                car: state.car,
                buyVehicle: state.buyVehicle,
                selectVehicle
            }}
        >
            {props.children}
        </CarContext.Provider>
    )
}

export default CarState;