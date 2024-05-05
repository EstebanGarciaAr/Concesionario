import { SELECT_VEHICLES } from '../../types'
export default (state, action) => {
    switch(action.type){
        case SELECT_VEHICLES:
            return{
                ...state, 
                buyVehicle: action.payload
            }

        default:
            return state;
    }
}