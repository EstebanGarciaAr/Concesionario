import React, {useReducer} from 'react'
import CarContext from './carContext'
import CarReducer from './carReducer'

const CarState = props => {
    const initialState = {
        car:[]
    }

    const[ state, dispatch] = useReducer(CarReducer, initialState)
    return(
        <CarContext.Provider
            value={{
                car: state.car
            }}
        >
            {props.children}
        </CarContext.Provider>
    )
}

export default CarState;