import { ACTIONTYPES } from "../constants/constants"
export const initialState = []
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONTYPES.SET_PRODUCTS:
            return [...action.payload.products]
        case ACTIONTYPES.REMOVE_PRODUCTS:
            return [];
        default:
            return state
    }
}

