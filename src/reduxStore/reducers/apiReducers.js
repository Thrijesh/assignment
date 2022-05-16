import { apiConsts } from "../consts/consts"

// INITIAL STATE OF APP
const initState = {
    apiResponseData: null,
    apiErr: null,
    apiLoading: false
}

const apiReducer = (state = initState, action) => {
    switch (action.type) {
        case apiConsts.API_REQUEST:
            state = {
                ...state,
                apiLoading: true,
                apiErr: null
            }
            break
        case apiConsts.API_SUCCESS:
            state = {
                ...state,
                apiLoading: false,
                apiResponseData: action.payload
            }
            break
        case apiConsts.API_FAILURE:
            state = {
                ...state,
                apiResponseData: null,
                apiLoading: false,
                apiErr: 'Error Loading Data. Please try again!'
            }
            break
    }
    return state
}

export default apiReducer

