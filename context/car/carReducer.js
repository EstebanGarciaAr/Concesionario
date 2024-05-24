import { SELECT_VEHICLES, 
    SAVE_ORDER,
    DISPLAY_ORDER,
    DELETE_ORDER
} from '../../types'
export default (state, action) => {
    switch(action.type){
        case SELECT_VEHICLES:
            return{
                ...state, 
                buyVehicle: action.payload
            }
        case SAVE_ORDER:
            return{
                ...state,
                car: [...state,action.payload]
            }
        case DISPLAY_ORDER:
            return{
                ...state,
                total: action.payload
            }
        case DELETE_ORDER:
            return{
                ...state,
                car: state.car.filter(articulo => articulo.id !== action.payload)
            }
        default:
            return state;
    }
}