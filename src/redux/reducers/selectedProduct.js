import { ACTIONTYPES } from "../constants/constants";

export const initialState = null
export const selectedProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONTYPES.SELECTED_PRODUCT:
            return { ...action.payload.product }
        case ACTIONTYPES.REMOVE_SELECTED_PRODUCT:
            return null;
        default:
            return state
    }
}