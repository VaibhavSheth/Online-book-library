 import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL,ORDER_DETAILS_REQUEST,ORDER_DETAILS_SUCCESS,ORDER_DETAILS_FAIL} from '../constants/cartConstants'


export const orderCreateReducer = (state = {}, action) => {
    switch(action.type){
        case ORDER_CREATE_REQUEST:
            return {
                loading: true
            }
        case ORDER_CREATE_SUCCESS:
            // logger.info(action.payload)
            return {
                loading: false,
                success: true,
                order: action.payload
            }
        case ORDER_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const orderDetailReducer = (state = {loading:true ,orderItems:[] , shippingAddress:{} }, action) => {
    switch(action.type){
        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ORDER_DETAILS_SUCCESS:
            // logger.info(action.payload)
            return {
                loading: false,
                order: action.payload
            }
        case ORDER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}