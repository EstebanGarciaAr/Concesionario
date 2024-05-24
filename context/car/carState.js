import React, {useReducer} from 'react'
import CarContext from './carContext'
import CarReducer from './carReducer'
import { SELECT_VEHICLES, 
    SAVE_ORDER,
    DISPLAY_ORDER,
    DELETE_ORDER
} from '../../types'

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

    //GUARDAR VEHICULO
    const guardarVehiculo = car =>{
        dispatch({
            type: SAVE_ORDER,
            payload: car
        })
    }

    //mostrar los items del pedido
    const mostrarResumen = total =>{
        dispatch({
            type: DISPLAY_ORDER,
            payload: total
        })
    }

    //eliminar articulo
    const eliminarProducto = id =>{
        dispatch({
            type: DELETE_ORDER,
            payload: id
        })
    }


    return(
        <CarContext.Provider
            value={{
                car: state.car,
                buyVehicle: state.buyVehicle,
                total: state.total,
                selectVehicle,
                guardarVehiculo,
                mostrarResumen,
                eliminarProducto
            }}
        >
            {props.children}
        </CarContext.Provider>
    )
}

export default CarState;