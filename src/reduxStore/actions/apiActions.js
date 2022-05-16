import { apiConsts } from "../consts/consts"
import { KEY } from '../../helpers/api'

export const fetchResults = (query) => {
    return async (dispatch) => {
        dispatch({ type: apiConsts.API_REQUEST })
        // CALLING API 
        await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${KEY}`)
            .then(res => {
                // CONVERTING RESULTS TO JSON   
                return res.json()
            })
            .then(result => {
                // SUCCESS PAYLOAD TO REDUCER 
                dispatch({
                    type: apiConsts.API_SUCCESS,
                    payload: result.items
                })
            })
            .catch(err => {
                console.log(err)
                // FAILURE PAYLOAD TO REDUCER    
                dispatch({
                    type: apiConsts.API_FAILURE,
                    payload: err
                })
            })
    }
}