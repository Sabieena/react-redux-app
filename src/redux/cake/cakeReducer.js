import { BUY_CAKE } from "./cakeType"

const initialState = {
    numberOfcakes: 20
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return{
                ...state,
                numberOfcakes: state.numberOfcakes - 1
            }
            default: return state
    }
}

export default cakeReducer

