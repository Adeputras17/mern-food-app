const placeOrderReducer = (state = {}, action) => {

    switch(action.type) {

        case "PLACE_ORDER_REQUEST" : return {
            loading : true
        }

        case "PLACE_ORDER_SUCCESS" : return {
            loading : false,
            success: true
        }

        case "PLACE_ORDER_FAIL" : return {
            loading : false,
            err : action.payload
            
        }

        default : return state

    }

}

const getUserOrdersReducer = (state = {orders : []}, action) => {

    switch(action.type) {

        case "GET_USER_ORDERS_REQUEST" : return {
            loading : true,
            ...state
        }

        case "GET_USER_ORDERS_SUCCESS" : return {
            loading : false,
            orders : action.payload
        }

        case "GET_USER_ORDERS_FAIL" : return {
            err : action.payload,
            loading : false
        }

        default : return state

    }

}

export default (placeOrderReducer, getUserOrdersReducer)